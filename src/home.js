import { landingPageHeader } from "./pages/component/header";
import { CompanyInfo } from "./main";
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { landingPageFooter } from "./pages/component/footer";
export function homePage(){
   return `
   ${landingPageHeader()}
   ${landingPageHero()}
   ${flashSaleSection()}
   ${flashSaleSection2()}
   ${flashSaleSection4()}
   ${flashSaleStackedRowsSection()}
   ${landingPageFooter()}
   `
}


export function landingPageHero(){
    return /*html*/`
    <div class="container my-3">
        <div class="row g-3">
            
            <!-- Left Sidebar: Main Categories (Hidden on mobile/tablet) -->
            <div class="col-lg-3 d-none d-lg-block">
                <div class="card border-0 shadow-sm rounded bg-white p-2 h-100">
                    <ul class="nav flex-column gap-1" style="font-size: 0.85rem;">
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">🥩</span> Supermarket
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">📱</span> Phones & Tablets
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">💻</span> Electronics
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">🏠</span> Home & Office
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">👗</span> Fashion
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">🕹️</span> Gaming
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">🍼</span> Baby Products
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark py-2 px-3 rounded hover-light d-flex align-items-center" href="#">
                                <span class="me-2">🏋️</span> Sporting Goods
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Center Content: Hero Image Slider Carousel -->
            <div class="col-12 col-md-8 col-lg-6">
                <div id="heroSlider" class="carousel slide h-100 shadow-sm rounded overflow-hidden" data-bs-ride="carousel">
                    <!-- Carousel Indicators -->
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <!-- Slider Images -->
                    <div class="carousel-inner h-100">
                        <div class="carousel-item active h-100">
                            <!-- Placeholder image representing a massive sales banner -->
                            <img src="https://picsum.photos/seed/jumia1/800/450" class="d-block w-100 h-100 object-fit-cover" alt="Mega Clearance Sale Banner" style="min-height: 380px;">
                        </div>
                        <div class="carousel-item h-100">
                            <img src="https://picsum.photos/seed/jumia2/800/450" class="d-block w-100 h-100 object-fit-cover" alt="Tech Week Deals Banner" style="min-height: 380px;">
                        </div>
                        <div class="carousel-item h-100">
                            <img src="https://picsum.photos/seed/jumia3/800/450" class="d-block w-100 h-100 object-fit-cover" alt="Supermarket Discount Banner" style="min-height: 380px;">
                        </div>
                    </div>

                    <!-- Slider Controls -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon p-3 bg-dark bg-opacity-25 rounded-circle" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
                        <span class="carousel-control-next-icon p-3 bg-dark bg-opacity-25 rounded-circle" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <!-- Right Column: Quick Commercial Cards (Hidden on mobile screens) -->
            <div class="col-12 col-md-4 col-lg-3 d-none d-md-block">
                <div class="d-flex flex-column gap-3 h-100">
                    
                    <!-- Top Services Box -->
                    <div class="card border-0 shadow-sm rounded bg-white p-3 flex-grow-1">
                        <div class="d-flex align-items-center mb-3">
                            <div class="bg-warning bg-opacity-10 p-2 rounded text-warning me-2" style="color: #f68b1e !important;">
                                📞
                            </div>
                            <div>
                                <h6 class="fw-bold mb-0" style="font-size: 0.85rem;">CALL TO ORDER</h6>
                                <p class="text-muted small mb-0">0700-600-0000</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <div class="bg-success bg-opacity-10 p-2 rounded text-success me-2">
                                📦
                            </div>
                            <div>
                                <h6 class="fw-bold mb-0" style="font-size: 0.85rem;">SELL ON ${CompanyInfo.name}</h6>
                                <p class="text-muted small mb-0">Open your shop today</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="bg-info bg-opacity-10 p-2 rounded text-info me-2">
                                ⚡
                            </div>
                            <div>
                                <h6 class="fw-bold mb-0" style="font-size: 0.85rem;">FLASH DEALS</h6>
                                <p class="text-muted small mb-0">Top offers up to 50% off</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Feature Mini-Banner Info Card -->
                    <div class="card border-0 shadow-sm rounded overflow-hidden text-white" style="background-color: #2a2a2a; min-height: 165px;">
                        <img src="https://picsum.photos/seed/promo/300/185" class="card-img opacity-50 h-100 object-fit-cover" alt="App Promotional Offer">
                        <div class="card-img-overlay d-flex flex-col justify-content-end p-3">
                            <h6 class="card-title fw-bold mb-1" style="font-size: 0.9rem;">Download our Free App</h6>
                            <p class="card-text small text-white-50 mb-0" style="font-size: 0.75rem;">Get exclusive access to voucher deals directly on your phone.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>`
}


export function flashSaleSection(){
    return /*html*/`
    <div class="container my-4">
        <!-- Flash Sale Header Container -->
        <div class="d-flex justify-content-between align-items-center bg-danger p-3 rounded-top text-white" style="background-color: #e51a22 !important;">
            <div class="d-flex align-items-center gap-2">
                <span class="fs-4">⚡</span>
                <h5 class="fw-bold mb-0 text-uppercase tracking-wide" style="font-size: 1.1rem;">Flash Sale</h5>
                <!-- Mock Countdown Timer -->
                <div class="d-none d-sm-flex align-items-center gap-1 ms-3 small fw-bold">
                    <span class="text-white-50">Time Left:</span>
                    <span class="bg-dark px-2 py-1 rounded">02</span> : 
                    <span class="bg-dark px-2 py-1 rounded">45</span> : 
                    <span class="bg-dark px-2 py-1 rounded">12</span>
                </div>
            </div>
            <a href="#" class="text-white text-decoration-none fw-bold small text-uppercase hover-opacity">
                See All  👉
            </a>
        </div>

        <!-- Dynamic Product Slide Wrapper -->
        <!-- overflow-x-auto enables a native swiping mechanism on mobile viewports -->
        <div class="row flex-nowrap overflow-x-auto g-2 bg-white p-2 m-0 border border-top-0 rounded-bottom shadow-sm" style="scrollbar-width: none; -ms-overflow-style: none;">
            
            <!-- Slide Item 1 -->
            <div class="col-6 col-md-4 col-lg-2 flex-shrink-0">
                <div class="card h-100 border-0 position-relative p-2 hover-shadow">
                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fw-bold" style="background-color: #f68b1e !important; font-size: 0.7rem;">-45%</span>
                    <img src="https://picsum.photos/seed/item1/200/200" class="card-img-top object-fit-contain rounded" alt="Product Image" style="height: 150px;">
                    <div class="card-body p-1 pt-2">
                        <p class="card-title text-truncate text-dark small mb-1">Wireless Bluetooth Earbuds Pro</p>
                        <h6 class="fw-bold text-dark mb-0">₦ 12,500</h6>
                        <del class="text-muted small" style="font-size: 0.75rem;">₦ 22,700</del>
                        <!-- Stock Progress Bar -->
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="text-muted" style="font-size: 0.65rem;">45 items left</span>
                    </div>
                </div>
            </div>

            <!-- Slide Item 2 -->
            <div class="col-6 col-md-4 col-lg-2 flex-shrink-0">
                <div class="card h-100 border-0 position-relative p-2 hover-shadow">
                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fw-bold" style="background-color: #f68b1e !important; font-size: 0.7rem;">-20%</span>
                    <img src="https://picsum.photos/seed/item2/200/200" class="card-img-top object-fit-contain rounded" alt="Product Image" style="height: 150px;">
                    <div class="card-body p-1 pt-2">
                        <p class="card-title text-truncate text-dark small mb-1">Smart Sports Fitness Watch</p>
                        <h6 class="fw-bold text-dark mb-0">₦ 18,900</h6>
                        <del class="text-muted small" style="font-size: 0.75rem;">₦ 23,625</del>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="text-muted" style="font-size: 0.65rem;">12 items left</span>
                    </div>
                </div>
            </div>

            <!-- Slide Item 3 -->
            <div class="col-6 col-md-4 col-lg-2 flex-shrink-0">
                <div class="card h-100 border-0 position-relative p-2 hover-shadow">
                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fw-bold" style="background-color: #f68b1e !important; font-size: 0.7rem;">-50%</span>
                    <img src="https://picsum.photos/seed/item3/200/200" class="card-img-top object-fit-contain rounded" alt="Product Image" style="height: 150px;">
                    <div class="card-body p-1 pt-2">
                        <p class="card-title text-truncate text-dark small mb-1">10,000mAh Ultra Slim Power Bank</p>
                        <h6 class="fw-bold text-dark mb-0">₦ 8,000</h6>
                        <del class="text-muted small" style="font-size: 0.75rem;">₦ 16,000</del>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="text-muted" style="font-size: 0.65rem;">4 items left</span>
                    </div>
                </div>
            </div>

            <!-- Slide Item 4 -->
            <div class="col-6 col-md-4 col-lg-2 flex-shrink-0">
                <div class="card h-100 border-0 position-relative p-2 hover-shadow">
                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fw-bold" style="background-color: #f68b1e !important; font-size: 0.7rem;">-15%</span>
                    <img src="https://picsum.photos/seed/item4/200/200" class="card-img-top object-fit-contain rounded" alt="Product Image" style="height: 150px;">
                    <div class="card-body p-1 pt-2">
                        <p class="card-title text-truncate text-dark small mb-1">Men's Breathable Running Sneakers</p>
                        <h6 class="fw-bold text-dark mb-0">₦ 15,200</h6>
                        <del class="text-muted small" style="font-size: 0.75rem;">₦ 17,880</del>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="text-muted" style="font-size: 0.65rem;">28 items left</span>
                    </div>
                </div>
            </div>

            <!-- Slide Item 5 -->
            <div class="col-6 col-md-4 col-lg-2 flex-shrink-0">
                <div class="card h-100 border-0 position-relative p-2 hover-shadow">
                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fw-bold" style="background-color: #f68b1e !important; font-size: 0.7rem;">-35%</span>
                    <img src="https://picsum.photos/seed/item5/200/200" class="card-img-top object-fit-contain rounded" alt="Product Image" style="height: 150px;">
                    <div class="card-body p-1 pt-2">
                        <p class="card-title text-truncate text-dark small mb-1">Stainless Steel Electric Kettle</p>
                        <h6 class="fw-bold text-dark mb-0">₦ 11,000</h6>
                        <del class="text-muted small" style="font-size: 0.75rem;">₦ 16,920</del>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="text-muted" style="font-size: 0.65rem;">19 items left</span>
                    </div>
                </div>
            </div>

            <!-- Slide Item 6 -->
            <div class="col-6 col-md-4 col-lg-2 flex-shrink-0">
                <div class="card h-100 border-0 position-relative p-2 hover-shadow">
                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fw-bold" style="background-color: #f68b1e !important; font-size: 0.7rem;">-60%</span>
                    <img src="https://picsum.photos/seed/item6/200/200" class="card-img-top object-fit-contain rounded" alt="Product Image" style="height: 150px;">
                    <div class="card-body p-1 pt-2">
                        <p class="card-title text-truncate text-dark small mb-1">High-Speed USB-C Cable (3ft)</p>
                        <h6 class="fw-bold text-dark mb-0">₦ 2,400</h6>
                        <del class="text-muted small" style="font-size: 0.75rem;">₦ 6,000</del>
                        <div class="progress mt-2" style="height: 6px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="text-muted" style="font-size: 0.65rem;">2 items left</span>
                    </div>
                </div>
            </div>

        </div>
    </div>`
}

export function flashSaleSection2(){
    return /*html*/`
    <div class="container my-4">
        <!-- Flash Sale Wrapper Card -->
        <div class="card border-0 shadow-sm rounded overflow-hidden bg-white">
            
            <!-- Section Header (Red Jumia Style with Live Countdown) -->
            <div class="card-header bg-danger text-white d-flex align-items-center justify-content-between py-3 border-0" style="background-color: #e61601 !important;">
                <div class="d-flex align-items-center flex-wrap gap-2 gap-sm-3">
                    <h5 class="fw-bold mb-0 text-uppercase tracking-wider d-flex align-items-center fs-6 fs-sm-5">
                        ⚡ Flash Sale
                    </h5>
                    <!-- Countdown Timer -->
                    <div class="d-flex align-items-center gap-1 bg-dark bg-opacity-25 px-2 py-1 rounded text-white font-monospace small">
                        <span class="fw-bold">Time Left:</span>
                        <span id="flash-hour">02</span>h :
                        <span id="flash-min">45</span>m :
                        <span id="flash-sec">12</span>s
                    </div>
                </div>
                <a href="#" class="text-white text-decoration-none fw-bold small text-uppercase hover-opacity">
                    See All &gt;
                </a>
            </div>

            <!-- Card Body containing the Swiper Structure -->
            <div class="card-body p-3 position-relative">
                
                <!-- Swiper Container (Using purely <div> classes) -->
                <div class="swiper flashSaleSwiper position-static">
                    <div class="swiper-wrapper">
                        
                        <!-- Product Slide 1 -->
                        <div class="swiper-slide h-auto">
                            <div class="card border-0 h-100 p-2 position-relative text-decoration-none text-dark">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-white m-2" style="background-color: #f68b1e !important; font-size: 0.7rem;">-45%</span>
                                <img src="https://picsum.photos/seed/item1/200/200" class="card-img-top object-fit-contain p-2" alt="Product Name" style="height: 150px;">
                                <div class="card-body p-1 d-flex flex-column justify-content-between mt-2">
                                    <p class="card-text text-truncate small mb-1">Wireless Bluetooth Earbuds</p>
                                    <h6 class="fw-bold mb-0">₦ 8,500</h6>
                                    <p class="text-muted text-decoration-line-through mb-1" style="font-size: 0.75rem;">₦ 15,450</p>
                                    <div class="progress mt-2" style="height: 6px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%; background-color: #f68b1e !important;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-muted mt-1" style="font-size: 0.65rem;">42 items left</small>
                                </div>
                            </div>
                        </div>

                        <!-- Product Slide 2 -->
                        <div class="swiper-slide h-auto">
                            <div class="card border-0 h-100 p-2 position-relative text-decoration-none text-dark">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-white m-2" style="background-color: #f68b1e !important; font-size: 0.7rem;">-20%</span>
                                <img src="https://picsum.photos/seed/item2/200/200" class="card-img-top object-fit-contain p-2" alt="Product Name" style="height: 150px;">
                                <div class="card-body p-1 d-flex flex-column justify-content-between mt-2">
                                    <p class="card-text text-truncate small mb-1">Smart Watch Series 8</p>
                                    <h6 class="fw-bold mb-0">₦ 18,900</h6>
                                    <p class="text-muted text-decoration-line-through mb-1" style="font-size: 0.75rem;">₦ 23,625</p>
                                    <div class="progress mt-2" style="height: 6px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 15%; background-color: #f68b1e !important;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-muted mt-1" style="font-size: 0.65rem;">5 items left</small>
                                </div>
                            </div>
                        </div>

                        <!-- Product Slide 3 -->
                        <div class="swiper-slide h-auto">
                            <div class="card border-0 h-100 p-2 position-relative text-dark">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-white m-2" style="background-color: #f68b1e !important; font-size: 0.7rem;">-55%</span>
                                <img src="https://picsum.photos/seed/item3/200/200" class="card-img-top object-fit-contain p-2" alt="Product Name" style="height: 150px;">
                                <div class="card-body p-1 d-flex flex-column justify-content-between mt-2">
                                    <p class="card-text text-truncate small mb-1">10000mAh Slim Power Bank</p>
                                    <h6 class="fw-bold mb-0">₦ 6,200</h6>
                                    <p class="text-muted text-decoration-line-through mb-1" style="font-size: 0.75rem;">₦ 13,770</p>
                                    <div class="progress mt-2" style="height: 6px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 90%; background-color: #f68b1e !important;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-muted mt-1" style="font-size: 0.65rem;">12 items left</small>
                                </div>
                            </div>
                        </div>

                        <!-- Product Slide 4 -->
                        <div class="swiper-slide h-auto">
                            <div class="card border-0 h-100 p-2 position-relative text-dark">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-white m-2" style="background-color: #f68b1e !important; font-size: 0.7rem;">-30%</span>
                                <img src="https://picsum.photos/seed/item4/200/200" class="card-img-top object-fit-contain p-2" alt="Product Name" style="height: 150px;">
                                <div class="card-body p-1 d-flex flex-column justify-content-between mt-2">
                                    <p class="card-text text-truncate small mb-1">Unisex Casual Sneakers</p>
                                    <h6 class="fw-bold mb-0">₦ 14,000</h6>
                                    <p class="text-muted text-decoration-line-through mb-1" style="font-size: 0.75rem;">₦ 20,000</p>
                                    <div class="progress mt-2" style="height: 6px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 45%; background-color: #f68b1e !important;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-muted mt-1" style="font-size: 0.65rem;">28 items left</small>
                                </div>
                            </div>
                        </div>

                        <!-- Product Slide 5 -->
                        <div class="swiper-slide h-auto">
                            <div class="card border-0 h-100 p-2 position-relative text-dark">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-white m-2" style="background-color: #f68b1e !important; font-size: 0.7rem;">-15%</span>
                                <img src="https://picsum.photos/seed/item5/200/200" class="card-img-top object-fit-contain p-2" alt="Product Name" style="height: 150px;">
                                <div class="card-body p-1 d-flex flex-column justify-content-between mt-2">
                                    <p class="card-text text-truncate small mb-1">Electric Kitchen Blender 1.5L</p>
                                    <h6 class="fw-bold mb-0">₦ 22,500</h6>
                                    <p class="text-muted text-decoration-line-through mb-1" style="font-size: 0.75rem;">₦ 26,470</p>
                                    <div class="progress mt-2" style="height: 6px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 60%; background-color: #f68b1e !important;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-muted mt-1" style="font-size: 0.65rem;">19 items left</small>
                                </div>
                            </div>
                        </div>

                        <!-- Product Slide 6 -->
                        <div class="swiper-slide h-auto">
                            <div class="card border-0 h-100 p-2 position-relative text-dark">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-white m-2" style="background-color: #f68b1e !important; font-size: 0.7rem;">-60%</span>
                                <img src="https://picsum.photos/seed/item6/200/200" class="card-img-top object-fit-contain p-2" alt="Product Name" style="height: 150px;">
                                <div class="card-body p-1 d-flex flex-column justify-content-between mt-2">
                                    <p class="card-text text-truncate small mb-1">Rechargeable LED Desk Lamp</p>
                                    <h6 class="fw-bold mb-0">₦ 4,100</h6>
                                    <p class="text-muted text-decoration-line-through mb-1" style="font-size: 0.75rem;">₦ 10,250</p>
                                    <div class="progress mt-2" style="height: 6px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 82%; background-color: #f68b1e !important;" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-muted mt-1" style="font-size: 0.65rem;">8 items left</small>
                                </div>
                            </div>
                        </div>

                        <!-- Product Slide 7 (Extra slide to verify scroll capability) -->
                        <div class="swiper-slide h-auto">
                            <div class="card border-0 h-100 p-2 position-relative text-dark">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-white m-2" style="background-color: #f68b1e !important; font-size: 0.7rem;">-10%</span>
                                <img src="https://picsum.photos/seed/item7/200/200" class="card-img-top object-fit-contain p-2" alt="Product Name" style="height: 150px;">
                                <div class="card-body p-1 d-flex flex-column justify-content-between mt-2">
                                    <p class="card-text text-truncate small mb-1">Ergonomic Optical Mouse</p>
                                    <h6 class="fw-bold mb-0">₦ 3,500</h6>
                                    <p class="text-muted text-decoration-line-through mb-1" style="font-size: 0.75rem;">₦ 3,880</p>
                                    <div class="progress mt-2" style="height: 6px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 30%; background-color: #f68b1e !important;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small class="text-muted mt-1" style="font-size: 0.65rem;">55 items left</small>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Navigation Chevron Buttons (Styled with Bootstrap utility circles) -->
                    <div class="swiper-button-prev btn btn-light rounded-circle shadow-sm border p-0 d-none d-md-flex align-items-center justify-content-center" style="width: 40px; height: 40px; transform: translateY(-50%); top: 50%; left: -5px; z-index: 10;">🔍</div>
                    <div class="swiper-button-next btn btn-light rounded-circle shadow-sm border p-0 d-none d-md-flex align-items-center justify-content-center" style="width: 40px; height: 40px; transform: translateY(-50%); top: 50%; right: -5px; z-index: 10;">🔍</div>
                </div>

            </div>
        </div>
    </div>`
}

export function flashSaleStackedRowsSection(){
    return /*html*/`
    <div class="container my-4">
        <!-- Main Component Card Wrapper -->
        <div class="card border-0 shadow-sm rounded overflow-hidden bg-white">
            
            <!-- Flash Sale Main Header Layer -->
            <div class="card-header border-0 text-white d-flex align-items-center justify-content-between py-3 px-3" style="background-color: #e51a22;">
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-lightning-charge-fill fs-4 text-warning"></i>
                    <h5 class="fw-bold mb-0 text-uppercase tracking-wide fs-6 fs-md-5">Flash Sale Mega Deals</h5>
                </div>
                <div class="d-flex align-items-center gap-2 bg-dark bg-opacity-25 px-3 py-1 rounded small">
                    <span class="text-white-50 small d-none d-sm-inline">Time Left:</span>
                    <span class="fw-bold tracking-wider" id="flash-sale-timer">12h : 45m : 20s</span>
                </div>
            </div>

            <!-- Card Content Content Space Wrapper -->
            <div class="card-body p-3 d-flex flex-column gap-4 position-relative">
                
                <!-- ROW 1: TOP SWIPER ROW -->
                <div class="position-relative">
                    <div class="swiper flashSaleRow1 overflow-hidden">
                        <div class="swiper-wrapper">
                            
                            <!-- Row 1 / Item 1 -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white">
                                <div class="position-relative text-center mb-2">
                                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-45%</span>
                                    <img src="https://picsum.photos/seed/row1item1/200/200" class="img-fluid object-fit-contain rounded" style="max-height: 140px;">
                                </div>
                                <div class="text-start">
                                    <p class="text-dark text-truncate small mb-1">Wireless Bluetooth Earbuds Pro</p>
                                    <h6 class="fw-bold text-dark mb-0">₦ 12,500</h6>
                                    <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 22,700</p>
                                    <div class="progress" style="height: 5px;"><div class="progress-bar bg-warning" style="width: 65%"></div></div>
                                </div>
                            </div>

                            <!-- Row 1 / Item 2 -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white">
                                <div class="position-relative text-center mb-2">
                                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-20%</span>
                                    <img src="https://picsum.photos/seed/row1item2/200/200" class="img-fluid object-fit-contain rounded" style="max-height: 140px;">
                                </div>
                                <div class="text-start">
                                    <p class="text-dark text-truncate small mb-1">Smart Fitness Watch Series 8</p>
                                    <h6 class="fw-bold text-dark mb-0">₦ 24,000</h6>
                                    <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 30,000</p>
                                    <div class="progress" style="height: 5px;"><div class="progress-bar bg-warning" style="width: 15%"></div></div>
                                </div>
                            </div>

                            <!-- Row 1 / Item 3 -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white">
                                <div class="position-relative text-center mb-2">
                                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-50%</span>
                                    <img src="https://picsum.photos/seed/row1item3/200/200" class="img-fluid object-fit-contain rounded" style="max-height: 140px;">
                                </div>
                                <div class="text-start">
                                    <p class="text-dark text-truncate small mb-1">10000mAh Ultra Slim Power Bank</p>
                                    <h6 class="fw-bold text-dark mb-0">₦ 8,900</h6>
                                    <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 17,800</p>
                                    <div class="progress" style="height: 5px;"><div class="progress-bar bg-warning" style="width: 80%"></div></div>
                                </div>
                            </div>

                            <!-- Additional row 1 placeholder items to ensure slide depth -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 4</div></div>
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 5</div></div>
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 6</div></div>
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 7</div></div>

                        </div>
                    </div>
                    <!-- Navigation Row 1 -->
                    <button class="row1-prev btn btn-white shadow-sm border rounded-circle d-none d-md-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle ms-2 z-3" style="width: 36px; height: 36px;"><i class="bi bi-chevron-left text-dark"></i></button>
                    <button class="row1-next btn btn-white shadow-sm border rounded-circle d-none d-md-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle me-2 z-3" style="width: 36px; height: 36px;"><i class="bi bi-chevron-right text-dark"></i></button>
                </div>

                <!-- ROW 2: BOTTOM SWIPER ROW -->
                <div class="position-relative border-top pt-3">
                    <div class="swiper flashSaleRow2 overflow-hidden">
                        <div class="swiper-wrapper">
                            
                            <!-- Row 2 / Item 1 -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white">
                                <div class="position-relative text-center mb-2">
                                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-35%</span>
                                    <img src="https://picsum.photos/seed/row2item1/200/200" class="img-fluid object-fit-contain rounded" style="max-height: 140px;">
                                </div>
                                <div class="text-start">
                                    <p class="text-dark text-truncate small mb-1">Unisex Casual Sports Sneakers</p>
                                    <h6 class="fw-bold text-dark mb-0">₦ 16,400</h6>
                                    <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 25,230</p>
                                    <div class="progress" style="height: 5px;"><div class="progress-bar bg-warning" style="width: 40%"></div></div>
                                </div>
                            </div>

                            <!-- Row 2 / Item 2 -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white">
                                <div class="position-relative text-center mb-2">
                                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-15%</span>
                                    <img src="https://picsum.photos/seed/row2item2/200/200" class="img-fluid object-fit-contain rounded" style="max-height: 140px;">
                                </div>
                                <div class="text-start">
                                    <p class="text-dark text-truncate small mb-1">Electric Stainless Coffee Mug</p>
                                    <h6 class="fw-bold text-dark mb-0">₦ 11,200</h6>
                                    <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 13,170</p>
                                    <div class="progress" style="height: 5px;"><div class="progress-bar bg-warning" style="width: 95%"></div></div>
                                </div>
                            </div>

                            <!-- Row 2 / Item 3 -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white">
                                <div class="position-relative text-center mb-2">
                                    <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-30%</span>
                                    <img src="https://picsum.photos/seed/row2item3/200/200" class="img-fluid object-fit-contain rounded" style="max-height: 140px;">
                                </div>
                                <div class="text-start">
                                    <p class="text-dark text-truncate small mb-1">Ergonomic USB Gaming Mouse</p>
                                    <h6 class="fw-bold text-dark mb-0">₦ 5,600</h6>
                                    <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 8,000</p>
                                    <div class="progress" style="height: 5px;"><div class="progress-bar bg-warning" style="width: 50%"></div></div>
                                </div>
                            </div>

                            <!-- Additional row 2 placeholder items to ensure slide depth -->
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 4</div></div>
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 5</div></div>
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 6</div></div>
                            <div class="swiper-slide h-auto border border-light p-2 rounded bg-white"><div class="text-center py-5 text-muted small">Slide Content 7</div></div>

                        </div>
                    </div>
                    <!-- Navigation Row 2 -->
                    <button class="row2-prev btn btn-white shadow-sm border rounded-circle d-none d-md-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle ms-2 z-3" style="width: 36px; height: 36px;"><i class="bi bi-chevron-left text-dark"></i></button>
                    <button class="row2-next btn btn-white shadow-sm border rounded-circle d-none d-md-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle me-2 z-3" style="width: 36px; height: 36px;"><i class="bi bi-chevron-right text-dark"></i></button>
                </div>

            </div>
        </div>
    </div>`
}

/**
 * JS INITIALIZATION (Paste inside your setup loop script):
 * 
 * // Common breakpoints configuration for both rows
 * const rowBreakpoints = {
 *     0:    { slidesPerView: 2, spaceBetween: 12 },
 *     576:  { slidesPerView: 3, spaceBetween: 12 },
 *     768:  { slidesPerView: 4, spaceBetween: 16 },
 *     1200: { slidesPerView: 6, spaceBetween: 16 }
 * };
 * 
 * // Initialize Row 1 Slider
 * const swiperRow1 = new Swiper('.flashSaleRow1', {
 *     slidesPerView: 2,
 *     spaceBetween: 12,
 *     navigation: {
 *         nextEl: '.row1-next',
 *         prevEl: '.row1-prev',
 *     },
 *     breakpoints: rowBreakpoints
 * });
 * 
 * // Initialize Row 2 Slider
 * const swiperRow2 = new Swiper('.flashSaleRow2', {
 *     slidesPerView: 2,
 *     spaceBetween: 12,
 *     navigation: {
 *         nextEl: '.row2-next',
 *         prevEl: '.row2-prev',
 *     },
 *     breakpoints: rowBreakpoints
 * });
 */



export function flashSaleSection4(){
    return /*html*/`
    <div class="container my-4">
        <!-- Flash Sale Card Wrapper -->
        <div class="card border-0 shadow-sm rounded overflow-hidden bg-white">
            
            <!-- Flash Sale Header Header -->
            <div class="card-header border-0 text-white d-flex align-items-center justify-content-between py-3 px-3" style="background-color: #e51a22;">
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-lightning-charge-fill fs-4 text-warning animate-pulse"></i>
                    <h5 class="fw-bold mb-0 text-uppercase tracking-wide fs-6 fs-md-5">Flash Sale</h5>
                </div>
                <!-- Countdown Timer Placeholder -->
                <div class="d-flex align-items-center gap-2 bg-dark bg-opacity-25 px-3 py-1 rounded small">
                    <span class="text-white-50 small d-none d-sm-inline">Time Left:</span>
                    <span class="fw-bold tracking-wider" id="flash-sale-timer">12h : 45m : 20s</span>
                </div>
            </div>

            <!-- Swiper Container Shell -->
            <div class="card-body position-relative p-3">
                
                <!-- Swiper Target Container -->
                <div class="swiper flashSaleSwiper overflow-hidden">
                    <!-- Swiper Wrapper (Using divs as requested) -->
                    <div class="swiper-wrapper">
                        
                        <!-- Product Slide 1 -->
                        <div class="swiper-slide h-auto border border-light p-2 rounded hover-shadow transition">
                            <div class="position-relative text-center mb-2">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-45%</span>
                                <img src="https://picsum.photos/seed/item1/200/200" class="img-fluid object-fit-contain rounded" alt="Product Name" style="max-height: 150px;">
                            </div>
                            <div class="text-start">
                                <p class="text-dark text-truncate small mb-1">Wireless Bluetooth Earbuds Pro</p>
                                <h6 class="fw-bold text-dark mb-0">₦ 12,500</h6>
                                <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 22,700</p>
                                <!-- Stock Progress Bar -->
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-muted d-block mt-1" style="font-size: 0.65rem;">65 items left</span>
                            </div>
                        </div>

                        <!-- Product Slide 2 -->
                        <div class="swiper-slide h-auto border border-light p-2 rounded hover-shadow transition">
                            <div class="position-relative text-center mb-2">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-20%</span>
                                <img src="https://picsum.photos/seed/item2/200/200" class="img-fluid object-fit-contain rounded" alt="Product Name" style="max-height: 150px;">
                            </div>
                            <div class="text-start">
                                <p class="text-dark text-truncate small mb-1">Smart Fitness Watch Series 8</p>
                                <h6 class="fw-bold text-dark mb-0">₦ 24,000</h6>
                                <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 30,000</p>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-muted d-block mt-1" style="font-size: 0.65rem;">12 items left</span>
                            </div>
                        </div>

                        <!-- Product Slide 3 -->
                        <div class="swiper-slide h-auto border border-light p-2 rounded hover-shadow transition">
                            <div class="position-relative text-center mb-2">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-50%</span>
                                <img src="https://picsum.photos/seed/item3/200/200" class="img-fluid object-fit-contain rounded" alt="Product Name" style="max-height: 150px;">
                            </div>
                            <div class="text-start">
                                <p class="text-dark text-truncate small mb-1">10000mAh Ultra Slim Power Bank</p>
                                <h6 class="fw-bold text-dark mb-0">₦ 8,900</h6>
                                <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 17,800</p>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-muted d-block mt-1" style="font-size: 0.65rem;">45 items left</span>
                            </div>
                        </div>

                        <!-- Product Slide 4 -->
                        <div class="swiper-slide h-auto border border-light p-2 rounded hover-shadow transition">
                            <div class="position-relative text-center mb-2">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-35%</span>
                                <img src="https://picsum.photos/seed/item4/200/200" class="img-fluid object-fit-contain rounded" alt="Product Name" style="max-height: 150px;">
                            </div>
                            <div class="text-start">
                                <p class="text-dark text-truncate small mb-1">Unisex Casual Sports Sneakers</p>
                                <h6 class="fw-bold text-dark mb-0">₦ 16,400</h6>
                                <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 25,230</p>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-muted d-block mt-1" style="font-size: 0.65rem;">22 items left</span>
                            </div>
                        </div>

                        <!-- Product Slide 5 -->
                        <div class="swiper-slide h-auto border border-light p-2 rounded hover-shadow transition">
                            <div class="position-relative text-center mb-2">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-15%</span>
                                <img src="https://picsum.photos/seed/item5/200/200" class="img-fluid object-fit-contain rounded" alt="Product Name" style="max-height: 150px;">
                            </div>
                            <div class="text-start">
                                <p class="text-dark text-truncate small mb-1">Electric Stainless Steel Coffee Mug</p>
                                <h6 class="fw-bold text-dark mb-0">₦ 11,200</h6>
                                <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 13,170</p>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-danger fw-bold d-block mt-1" style="font-size: 0.65rem;">🔥 Only 3 left</span>
                            </div>
                        </div>

                        <!-- Product Slide 6 -->
                        <div class="swiper-slide h-auto border border-light p-2 rounded hover-shadow transition">
                            <div class="position-relative text-center mb-2">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-30%</span>
                                <img src="https://picsum.photos/seed/item6/200/200" class="img-fluid object-fit-contain rounded" alt="Product Name" style="max-height: 150px;">
                            </div>
                            <div class="text-start">
                                <p class="text-dark text-truncate small mb-1">Ergonomic USB Optical Gaming Mouse</p>
                                <h6 class="fw-bold text-dark mb-0">₦ 5,600</h6>
                                <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 8,000</p>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-muted d-block mt-1" style="font-size: 0.65rem;">18 items left</span>
                            </div>
                        </div>

                        <!-- Product Slide 7 (Extra slide to demonstrate navigation) -->
                        <div class="swiper-slide h-auto border border-light p-2 rounded hover-shadow transition">
                            <div class="position-relative text-center mb-2">
                                <span class="position-absolute top-0 start-0 badge bg-warning text-dark fw-bold">-25%</span>
                                <img src="https://picsum.photos/seed/item7/200/200" class="img-fluid object-fit-contain rounded" alt="Product Name" style="max-height: 150px;">
                            </div>
                            <div class="text-start">
                                <p class="text-dark text-truncate small mb-1">HD Waterproof Action Camera 4K</p>
                                <h6 class="fw-bold text-dark mb-0">₦ 38,500</h6>
                                <p class="text-muted text-decoration-line-through small mb-2" style="font-size: 0.75rem;">₦ 51,330</p>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-muted d-block mt-1" style="font-size: 0.65rem;">8 items left</span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Custom Bootstrap Icon Navigation Controls -->
                <button class="swiper-button-prev btn btn-white shadow-sm border rounded-circle d-none d-md-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle-y ms-2 z-3" style="width: 40px; height: 40px;">
                    <i class="bi bi-chevron-left text-dark fw-bold"></i>
                </button>
                <button class="swiper-button-next btn btn-white shadow-sm border rounded-circle d-none d-md-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y me-2 z-3" style="width: 40px; height: 40px;">
                    <i class="bi bi-chevron-right text-dark fw-bold"></i>
                </button>

            </div>
        </div>
    </div>`
}


export function homePageFunction(){
const swiper = new Swiper('.flashSaleSwiper', {
    slidesPerView: 2,       // 2 items default for mobile viewports
    spaceBetween: 12,       // Gap between grid columns
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: { slidesPerView: 3, spaceBetween: 12 },
        768: { slidesPerView: 4, spaceBetween: 16 },
        992: { slidesPerView: 5, spaceBetween: 16 },
        1200: { slidesPerView: 6, spaceBetween: 16 } // 6 items on big desktop viewports
    }
});

const swiper2 = new Swiper('.flashSaleTwoRowSwiper', {
      slidesPerView: 2,
    grid: {
        rows: 2,
        fill: 'row'
    },
    spaceBetween: 12,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: { slidesPerView: 3, grid: { rows: 2 }, spaceBetween: 12 },
        768: { slidesPerView: 4, grid: { rows: 2 }, spaceBetween: 16 },
        1200: { slidesPerView: 6, grid: { rows: 2 }, spaceBetween: 16 }
    }
});


 // Common breakpoints configuration for both rows
 const rowBreakpoints = {
     0:    { slidesPerView: 2, spaceBetween: 12 },
     576:  { slidesPerView: 3, spaceBetween: 12 },
     768:  { slidesPerView: 4, spaceBetween: 16 },
     1200: { slidesPerView: 6, spaceBetween: 16 }
 };
 
 // Initialize Row 1 Slider
 const swiperRow1 = new Swiper('.flashSaleRow1', {
     slidesPerView: 2,
     spaceBetween: 12,
     navigation: {
         nextEl: '.row1-next',
         prevEl: '.row1-prev',
     },
     breakpoints: rowBreakpoints
 });
 
 // Initialize Row 2 Slider
 const swiperRow2 = new Swiper('.flashSaleRow2', {
     slidesPerView: 2,
     spaceBetween: 12,
     navigation: {
         nextEl: '.row2-next',
         prevEl: '.row2-prev',
     },
     breakpoints: rowBreakpoints
 });
}

