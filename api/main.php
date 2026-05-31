<?php
   class Auth{
      public function __construct($conn) {
        $this->conn = $conn;
      }
    // public function Login($data){
    //    $user = trim($data['user'] ?? '');
    //     if (empty($user)) {
    //         return [
    //             'success' => false,
    //             'message' => 'Email or phone number is required.',
    //             'data' => []
    //         ];
    //     }

    //     $isEmail = filter_var($user, FILTER_VALIDATE_EMAIL);

    //     // Phone must start with country code e.g +2348012345678
    //     $isPhone = preg_match('/^\+[1-9][0-9]{7,14}$/', $user);

    // if (!$isEmail && !$isPhone) {
    //     return [
    //         'success' => false,
    //         'message' => 'Enter a valid email or phone number with country code.',
    //         'data' => []
    //     ];
    // }

    // $uid = bin2hex(random_bytes(16));

    // if ($isEmail) {
    //     $stmt = $this->conn->prepare("SELECT id, uid FROM users WHERE email = ? LIMIT 1");
    //     $stmt->bind_param("s", $user);
    // } else {
    //     $stmt = $this->conn->prepare("SELECT id, uid FROM users WHERE phone = ? LIMIT 1");
    //     $stmt->bind_param("s", $user);
    // }
    // $stmt->execute();
    // $result = $stmt->get_result();
    // if ($result->num_rows > 0) {
    //     $row = $result->fetch_assoc();
    //     // Generate new login UID/token
    //     $update = $this->conn->prepare("UPDATE users SET uid = ? WHERE id = ?");
    //     $update->bind_param("si",$uid,$row['id']);
    //     $update->execute();
    //     return [
    //         'success' => true,
    //         'message' => 'Account found.',
    //         'data' => [
    //             'redirect' => '/login2',
    //             'uid' => $uid
    //         ]
    //     ];
    // }
    //     return [
    //         'success' => true,
    //         'message' => 'Account not found.',
    //         'data' => [
    //             'redirect' => '/signup',
    //             'uid' => $uid
    //         ]
    //     ];
    // }

   
public function Login($data){
    $user = trim($data['user'] ?? '');
    if (empty($user)) {
        return [
            'success' => false,
            'message' => 'Email or phone number is required.',
            'data' => []
        ];
    }
    $isEmail = filter_var($user, FILTER_VALIDATE_EMAIL);
    $isPhone = preg_match('/^\+[1-9][0-9]{7,14}$/', $user);
    if (!$isEmail && !$isPhone) {
        return [
            'success' => false,
            'message' => 'Enter a valid email or phone number with country code.',
            'data' => []
        ];
    }

    $uid = bin2hex(random_bytes(16));
    if ($isEmail) {
        $stmt = $this->conn->prepare(
            "SELECT id FROM users WHERE email = ? LIMIT 1"
        );
        $stmt->bind_param("s", $user);
    } else {
        $stmt = $this->conn->prepare(
            "SELECT id FROM users WHERE phone = ? LIMIT 1"
        );
        $stmt->bind_param("s", $user);
    }

    $stmt->execute();
    $result = $stmt->get_result();
    // User exists
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $update = $this->conn->prepare(
            "UPDATE users SET uid = ? WHERE id = ?"
        );
        $update->bind_param("si",$uid, $row['id']);
        $update->execute();
        return [
            'success' => true,
            'message' => 'Account found.',
            'data' => [
                'redirect' => '/login2',
                'uid' => $uid
            ]
        ];
    }

    // User does not exist -> create account
    if ($isEmail) {
        $insert = $this->conn->prepare(
            "INSERT INTO users (uid, email)
             VALUES (?, ?)"
        );
        $insert->bind_param("ss",$uid,$user);
    } else {

        $insert = $this->conn->prepare(
            "INSERT INTO users (uid, phone) VALUES (?, ?)"
        );
        $insert->bind_param("ss", $uid, $user);
    }
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
            'redirect' => '/signup',
            'uid' => $uid
        ]
    ];
}
   
    public function loginPassword($data){
        $uid=$data['uid'];
        $pass=$data['pass'];
        /* chatgpt 
          -- check if exist uid and password  exist 
          -- 
         */
    }


    public function Signup($data)
{
    $uid = trim($data['uid'] ?? '');
    $firstname = trim($data['firstname'] ?? '');
    $lastname = trim($data['lastname'] ?? '');
    $password = trim($data['password'] ?? '');
    $email = trim($data['email'] ?? '');
    $phone = trim($data['phone'] ?? '');

    if (empty($uid)) {
        return [
            'success' => false,
            'message' => 'Invalid signup session.',
            'data' => []
        ];
    }

    if (empty($firstname) || empty($lastname)) {
        return [
            'success' => false,
            'message' => 'Firstname and lastname are required.',
            'data' => []
        ];
    }

    if (empty($password)) {
        return [
            'success' => false,
            'message' => 'Password is required.',
            'data' => []
        ];
    }

    if (empty($email) && empty($phone)) {
        return [
            'success' => false,
            'message' => 'Email or phone number is required.',
            'data' => []
        ];
    }

    if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return [
            'success' => false,
            'message' => 'Invalid email address.',
            'data' => []
        ];
    }

    if (!empty($phone) && !preg_match('/^\+[1-9][0-9]{7,14}$/', $phone)) {
        return [
            'success' => false,
            'message' => 'Phone number must include country code.',
            'data' => []
        ];
    }

    // Check email
    if (!empty($email)) {
        $stmt = $this->conn->prepare(
            "SELECT id FROM users WHERE email = ? LIMIT 1"
        );
        $stmt->bind_param("s", $email);
        $stmt->execute();

        if ($stmt->get_result()->num_rows > 0) {
            return [
                'success' => false,
                'message' => 'Email already exists.',
                'data' => []
            ];
        }
    }

    // Check phone
    if (!empty($phone)) {
        $stmt = $this->conn->prepare(
            "SELECT id FROM users WHERE phone = ? LIMIT 1"
        );
        $stmt->bind_param("s", $phone);
        $stmt->execute();

        if ($stmt->get_result()->num_rows > 0) {
            return [
                'success' => false,
                'message' => 'Phone number already exists.',
                'data' => []
            ];
        }
    }

    $password = password_hash($password, PASSWORD_DEFAULT);

    $referralCode = strtoupper(substr(md5(uniqid()), 0, 8));

    $stmt = $this->conn->prepare("
        INSERT INTO users
        (
            uid,
            firstname,
            lastname,
            email,
            phone,
            password,
            referral_code
        )
        VALUES
        (
            ?, ?, ?, ?, ?, ?, ?
        )
    ");

    $stmt->bind_param(
        "sssssss",
        $uid,
        $firstname,
        $lastname,
        $email,
        $phone,
        $password,
        $referralCode
    );

    if (!$stmt->execute()) {
        return [
            'success' => false,
            'message' => 'Failed to create account.',
            'data' => []
        ];
    }

    return [
        'success' => true,
        'message' => 'Account created successfully.',
        'data' => [
            'redirect' => '/dashboard',
            'uid' => $uid
        ]
    ];
}

   }