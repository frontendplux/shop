import { CompanyInfo, userData } from "../../main";

export function landingPageHeader(){
    return /*html*/`
    <header class="w-100 shadow-sm bg-white sticky-top">
        
        <!-- Top Small Announcement Bar -->
        <div class="w-100 bg-warning py-1 d-none d-md-block" style="background-color: #f68b1e !important;">
            <div class="container d-flex justify-content-between align-items-center text-white" style="font-size: 0.75rem;">
                <div>
                    <span class="me-3">★ Free Delivery on ${CompanyInfo.name} Express Items</span>
                    <span>📦 Millions of Products Available</span>
                </div>
                <div class="d-flex gap-3">
                    <a href="#" class="text-white text-decoration-none hover-opacity">Sell on ${CompanyInfo.name}</a>
                    <a href="#" class="text-white text-decoration-none hover-opacity">Help Center</a>
                </div>
            </div>
        </div>

        <!-- Main Navigation Bar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div class="container d-flex align-items-center justify-content-between">
                
                <!-- Brand Logo & Mobile Toggle -->
                <div class="d-flex align-items-center">
                    <button class="navbar-toggler border-0 ps-0 me-2 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav" aria-controls="mobileNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand fw-bold text-dark fs-3 m-0 p-0" href="#">
                        ${CompanyInfo.name} <span class="text-warning" style="color: #f68b1e !important;">★</span>
                    </a>
                </div>

                <!-- Search Bar (Responsive: Flex-grow on desktop) -->
                <div class="mx-lg-4 flex-grow-1 d-none d-md-block" style="max-width: 600px;">
                    <form class="d-flex border border-secondary-subtle rounded">
                        <div class="input-group">
                            <span class="input-group-text bg-white border-0 text-muted">
                                🔍
                            </span>
                            <input type="search" class="form-control border-0 shadow-none ps-0" placeholder="Search products, brands and categories" aria-label="Search">
                        </div>
                    </form>
                </div>

                <!-- Right Side Actions (Account & Cart) -->
                <div class="d-flex align-items-center">
                    
                    <!-- Account Dropdown Menu -->
                    <div class="dropdown" style="font-size: 0.85rem;">
                        <button class="btn btn-white border-0 dropdown-toggle fw-medium d-flex align-items-center text-dark px-2 shadow-none" type="button" id="accountMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="me-1">👤</span> <span class="d-none d-md-inline">Hi, Account</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2 p-2" aria-labelledby="accountMenu" style="width: 220px;">
                            ${userData.isLogin ? ` <a class="btn btn-warning w-100 fw-bold text-white mb-2 py-2" href="/dashboard" style="background-color: #f68b1e; border: none; font-size: 0.85rem;">
                                    👤 My Account
                                </a>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item py-2 rounded small" href="#">📦 Orders</a></li>
                            <li><a class="dropdown-item py-2 rounded small" href="#">❤️ Saved Items</a></li>`:`<li>
                                <a class="btn btn-warning w-100 fw-bold text-white mb-2 py-2" href="/login" style="background-color: #f68b1e; border: none; font-size: 0.85rem;">
                                    SIGN IN
                                </a>
                            </li>`}
                        </ul>
                    </div>

                    <!-- Help Dropdown -->
                    <div class="dropdown d-none d-md-block">
                        <button class="btn btn-white border-0 dropdown-toggle fw-medium d-flex align-items-center text-dark px-2 shadow-none" type="button" id="helpMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="me-1">❓</span> Help
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2" aria-labelledby="helpMenu">
                            <li><a class="dropdown-item small" href="#">Help Center</a></li>
                            <li><a class="dropdown-item small" href="#">Place an order</a></li>
                            <li><a class="dropdown-item small" href="#">Track your order</a></li>
                        </ul>
                    </div>

                    <!-- Cart Link -->
                    <a href="#" class="btn btn-white border-0 fw-medium d-flex align-items-center text-dark px-2 position-relative shadow-none">
                        <span class="me-1">🛒</span> 
                        <span class="d-none d-md-inline">Cart</span>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white" style="background-color: #f68b1e !important; font-size: 0.65rem;">
                            ${userData.cart_count}
                        </span>
                    </a>
                </div>

            </div>
        </nav>

        <!-- Mobile Search Bar Layer (Visible only on phone sizes below MD) -->
        <div class="container pb-3 d-block d-md-none">
            <form class="d-flex border border-secondary-subtle rounded bg-light">
                <div class="input-group">
                    <span class="input-group-text bg-transparent border-0 text-muted">
                        🔍
                    </span>
                    <input type="search" class="form-control bg-transparent border-0 shadow-none ps-0 py-2" placeholder="Search products, brands and categories">
                </div>
            </form>
        </div>

        <!-- Mobile Drawer / Dropdown Collapse Menu -->
        <div class="collapse d-lg-none border-top" id="mobileNav">
            <div class="bg-white p-3">
                <p class="fw-bold text-muted small mb-2">CATEGORIES</p>
                <ul class="list-unstyled mb-0">
                    <li class="py-2"><a href="#" class="text-dark text-decoration-none">📱 Supermarket</a></li>
                    <li class="py-2"><a href="#" class="text-dark text-decoration-none">👕 Fashion</a></li>
                    <li class="py-2"><a href="#" class="text-dark text-decoration-none">💻 Electronics</a></li>
                    <li class="py-2"><a href="#" class="text-dark text-decoration-none">🏠 Home & Office</a></li>
                </ul>
            </div>
        </div>

    </header>`
}