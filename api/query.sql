CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(300) NOT NULL UNIQUE,

    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,

    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20) UNIQUE,

    password VARCHAR(300) NOT NULL,

    referral_code VARCHAR(100) UNIQUE,
    referred_by VARCHAR(100) NULL,

    reset_pin VARCHAR(10) NULL,
    pin_expired_at DATETIME NULL,

    login_type ENUM('main', 'gmail', 'github', 'facebook', 'x') DEFAULT 'main',

    is_admin BOOLEAN DEFAULT FALSE,
    is_vendor BOOLEAN DEFAULT FALSE,

    address JSON DEFAULT '{}',
    credit_card JSON DEFAULT '{}',
    account_number JSON DEFAULT '{}',
    other_information JSON DEFAULT '{}',
    avatar VARCHAR(500) NULL,

    balance DECIMAL(15,2) DEFAULT 0.00,
    currency_code CHAR(3) DEFAULT 'NGN',
    status ENUM('active','suspended','banned') DEFAULT 'active',
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    avatar VARCHAR(255) NULL,
    last_login_at DATETIME NULL,

    deleted_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email (email),
    INDEX idx_phone (phone),
    INDEX idx_uid (uid),
    INDEX idx_referral_code (referral_code)
);




