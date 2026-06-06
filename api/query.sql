CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    uid VARCHAR(100) NOT NULL UNIQUE,

    firstname VARCHAR(100) NULL,
    lastname VARCHAR(100) NULL,

    username VARCHAR(100) UNIQUE NULL,
    email VARCHAR(255) UNIQUE NULL,
    phone VARCHAR(20) UNIQUE NULL,

    password VARCHAR(255) NULL,

    referral_code VARCHAR(100) UNIQUE,
    referred_by VARCHAR(100) NULL,

    reset_pin VARCHAR(10) NULL,
    pin_expired_at DATETIME NULL,

    login_type ENUM(
        'main',
        'gmail',
        'github',
        'facebook',
        'x'
    ) DEFAULT 'main',

    is_admin BOOLEAN DEFAULT FALSE,
    is_vendor BOOLEAN DEFAULT FALSE,

    address JSON NULL,
    credit_card JSON NULL,
    account_number JSON NULL,
    other_information JSON NULL,

    avatar VARCHAR(500) NULL,

    balance DECIMAL(15,2) DEFAULT 0.00,
    currency_code CHAR(3) DEFAULT 'NGN',
    status ENUM(
        'active',
        'suspended',
        'banned'
    ) DEFAULT 'active',

    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,

    last_login_at DATETIME NULL,
    deleted_at DATETIME NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    icon VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,

    description TEXT NULL,
    keywords TEXT NULL,

    parent_id INT UNSIGNED NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_categories_parent
        FOREIGN KEY (parent_id)
        REFERENCES categories(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS sellers (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    slug VARCHAR(255) NOT NULL UNIQUE,

    seller_id BIGINT UNSIGNED NOT NULL UNIQUE,

    wallet_balance DECIMAL(15,2) DEFAULT 0.00,

    email VARCHAR(255) NULL,
    phone VARCHAR(20) NULL,

    cover VARCHAR(255) NULL,
    logo VARCHAR(255) NULL,

    account_details JSON NULL,
    other_information JSON NULL,

    can_deliver_to_customer BOOLEAN DEFAULT FALSE,
    delivery_areas JSON NULL,

    description TEXT NULL,
    keywords TEXT NULL,

    country VARCHAR(100) NULL,
    state VARCHAR(100) NULL,
    city VARCHAR(100) NULL,

    address TEXT NULL,

    status ENUM(
        'active',
        'inactive',
        'pending'
    ) DEFAULT 'pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_sellers_user
        FOREIGN KEY (seller_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    INDEX idx_sellers_name (name),
    INDEX idx_sellers_email (email),
    INDEX idx_sellers_phone (phone),
    INDEX idx_sellers_status (status),
    INDEX idx_sellers_location (country, state, city)
);

CREATE TABLE IF NOT EXISTS promotional (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    product_id INT UNSIGNED NOT NULL,

    title VARCHAR(255) NOT NULL,

    slug VARCHAR(255) NOT NULL UNIQUE,

    discount_percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00,

    description TEXT NULL,

    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_promotional_product (product_id),
    INDEX idx_promotional_dates (start_date, end_date)
);

CREATE TABLE IF NOT EXISTS products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    seller_id VARCHAR(255) NOT NULL,
    category_id VARCHAR(255) NOT NULL,

    name VARCHAR(255) NOT NULL,

    slug VARCHAR(255) NOT NULL UNIQUE,

    keywords TEXT NULL,
    description TEXT NULL,

    price DECIMAL(15,2) NOT NULL DEFAULT 0.00,

    promotional_price VARCHAR(255) NULL,

    stock INT NOT NULL DEFAULT 0,

    images JSON NULL,
    attributes JSON NULL,

    status ENUM(
        'active',
        'inactive',
        'pending'
    ) DEFAULT 'pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_products_seller
        FOREIGN KEY (seller_id)
        REFERENCES sellers(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_products_category
        FOREIGN KEY (category_id)
        REFERENCES categories(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_products_promotion
        FOREIGN KEY (promotional_price)
        REFERENCES promotional(slug)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    INDEX idx_products_name (name),
    INDEX idx_products_status (status),
    INDEX idx_products_seller (seller_id),
    INDEX idx_products_category (category_id),
    INDEX idx_products_price (price)
);
