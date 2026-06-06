<?php
   class Auth{
      public function __construct($conn) {
        $this->conn = $conn;
      }

        private function generateReferralCode($length = 8)
        {
            do {
                $code = strtoupper(substr(bin2hex(random_bytes(8)), 0, $length));

                $stmt = $this->conn->prepare("
                    SELECT id FROM users
                    WHERE referral_code = ?
                    LIMIT 1
                ");

                $stmt->bind_param("s", $code);
                $stmt->execute();

                $exists = $stmt->get_result()->num_rows > 0;

            } while ($exists);

            return $code;
        }

public function Login($data){
    $email = trim($data['email'] ?? '');
    $referral = trim($data['referral'] ?? '');

    if (empty($email)) {
        return [
            'success' => false,
            'message' => 'Email is required.',
            'data' => []
        ];
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return [
            'success' => false,
            'message' => 'Please enter a valid email address.',
            'data' => []
        ];
    }

    // Check referral code if supplied
    $referredBy = null;

    if (!empty($referral)) {

        $stmtReferral = $this->conn->prepare("
            SELECT referral_code
            FROM users
            WHERE referral_code = ?
            LIMIT 1
        ");

        $stmtReferral->bind_param("s", $referral);
        $stmtReferral->execute();

        $refResult = $stmtReferral->get_result();

        if ($refResult->num_rows === 0) {
            return [
                'success' => false,
                'message' => 'Invalid referral code.',
                'data' => []
            ];
        }

        $referredBy = $referral;
    }

    // Check if email already exists
    $stmt = $this->conn->prepare("
        SELECT id,email,password
        FROM users
        WHERE email = ?
        LIMIT 1
    ");

    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    // Existing account
    if ($result->num_rows > 0) {

        $user = $result->fetch_assoc();

        return [
            'success' => true,
            'message' => 'Account found.',
            'data' => [
                'email' => $user['email'],
                'has_password' => !empty($user['password']),
                'redirect' => !empty($user['password'])
                    ? '/enter-password'
                    : '/create-password'
            ]
        ];
    }

    // Create account
    $uid = bin2hex(random_bytes(16));

    // Generate referral code
    do {

        $referralCode = strtoupper(
            substr(bin2hex(random_bytes(8)), 0, 8)
        );

        $check = $this->conn->prepare("
            SELECT id
            FROM users
            WHERE referral_code = ?
            LIMIT 1
        ");

        $check->bind_param("s", $referralCode);
        $check->execute();

    } while (
        $check->get_result()->num_rows > 0
    );

    $insert = $this->conn->prepare("
        INSERT INTO users (
            uid,
            email,
            referral_code,
            referred_by
        )
        VALUES (?, ?, ?, ?)
    ");

    $insert->bind_param(
        "ssss",
        $uid,
        $email,
        $referralCode,
        $referredBy
    );

    if (!$insert->execute()) {
        return [
            'success' => false,
            'message' => 'Unable to create account.',
            'data' => []
        ];
    }

    return [
        'success' => true,
        'message' => 'Account created successfully.',
        'data' => [
            'email' => $email,
            'has_password' => false,
            'redirect' => '/create-password'
        ]
    ];
}

public function loginPassword($data)
{
    $email = trim($data['email'] ?? '');
    $password = trim($data['password'] ?? '');

    if (empty($email) || empty($password)) {
        return [
            'success' => false,
            'message' => 'Email and password are required.',
            'data' => []
        ];
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return [
            'success' => false,
            'message' => 'Invalid email address.',
            'data' => []
        ];
    }

    $stmt = $this->conn->prepare("
        SELECT
            id,
            uid,
            email,
            password,
            status
        FROM users
        WHERE email = ?
        LIMIT 1
    ");

    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        return [
            'success' => false,
            'message' => 'Account not found.',
            'data' => [
                'redirect' => '/login'
            ]
        ];
    }

    $user = $result->fetch_assoc();

    if ($user['status'] === 'banned') {
        return [
            'success' => false,
            'message' => 'Your account has been banned.',
            'data' => []
        ];
    }

    if ($user['status'] === 'suspended') {
        return [
            'success' => false,
            'message' => 'Your account has been suspended.',
            'data' => []
        ];
    }

    if (empty($user['password'])) {
        return [
            'success' => false,
            'message' => 'No password has been created for this account.',
            'data' => [
                'redirect' => '/create-password'
            ]
        ];
    }

    if (!password_verify($password, $user['password'])) {
        return [
            'success' => false,
            'message' => 'Incorrect password.',
            'data' => []
        ];
    }

    // Generate fresh UID
    $uid = bin2hex(random_bytes(16));

    $update = $this->conn->prepare("
        UPDATE users
        SET
            uid = ?,
            last_login_at = NOW()
        WHERE id = ?
    ");

    $update->bind_param(
        "si",
        $uid,
        $user['id']
    );

    $update->execute();

    return [
        'success' => true,
        'message' => 'Login successful.',
        'data' => [
            'user_id' => $user['id'],
            'uid' => $uid,
            'redirect' => '/dashboard'
        ]
    ];
}

public function Signup($data)
{
    $email = trim($data['email'] ?? '');
    $password = trim($data['password'] ?? '');

    if (empty($email) || empty($password)) {
        return [
            'success' => false,
            'message' => 'Email and password are required.',
            'data' => [
                'redirect' => '/login'
            ]
        ];
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return [
            'success' => false,
            'message' => 'Invalid email address.',
            'data' => [
                'redirect' => '/login'
            ]
        ];
    }

    // Check user exists
    $stmt = $this->conn->prepare("
        SELECT id, password
        FROM users
        WHERE email = ?
        LIMIT 1
    ");

    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        return [
            'success' => false,
            'message' => 'Account not found.',
            'data' => [
                'redirect' => '/login'
            ]
        ];
    }

    $user = $result->fetch_assoc();

    // Optional: prevent overwriting existing password
    if (!empty($user['password'])) {
        return [
            'success' => false,
            'message' => 'Password already exists for this account.',
            'data' => [
                'redirect' => '/enter-password'
            ]
        ];
    }

    $passwordHash = password_hash(
        $password,
        PASSWORD_BCRYPT
    );

    $uid = bin2hex(random_bytes(16));

    $update = $this->conn->prepare("
        UPDATE users
        SET
            password = ?,
            uid = ?
        WHERE id = ?
    ");

    $update->bind_param(
        "ssi",
        $passwordHash,
        $uid,
        $user['id']
    );

    if (!$update->execute()) {
        return [
            'success' => false,
            'message' => 'Unable to create password.',
           'data' => [
                'redirect' => '/login'
            ]
        ];
    }

    return [
        'success' => true,
        'message' => 'Account created successfully.',
        'data' => [
            'user_id' => $user['id'],
            'uid' => $uid,
            'redirect' => '/dashboard'
        ]
    ];
}

/*

 */

   }