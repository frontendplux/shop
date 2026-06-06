import { CompanyInfo } from "../../main";
export function landingPageFooter(){
    return /*html*/`
    <footer class="w-100 mt-5 bg-dark text-white pt-5">
        
        <div class="border-bottom border-secondary pb-4 mb-4">
            <div class="container">
                <div class="row align-items-center g-3">
                    <div class="col-12 col-md-3">
                        <h4 class="fw-bold m-0 text-white">${CompanyInfo.name} <span class="text-warning" style="color: #f68b1e !important;">★</span></h4>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6 class="mb-1 text-uppercase fw-bold" style="font-size: 0.85rem; tracking-wide">New to ${CompanyInfo.name}?</h6>
                        <p class="text-muted small mb-0">Subscribe to our newsletter to get updates on our latest offers.</p>
                    </div>
                    <div class="col-12 col-md-5">
                        <form class="d-flex gap-2">
                            <input type="email" class="form-control bg-white border-0 py-2 shadow-none" placeholder="Enter E-mail Address" aria-label="Email" required>
                            <button class="btn btn-warning fw-bold text-white px-4 text-uppercase" type="submit" style="background-color: #f68b1e; border: none; font-size: 0.85rem;">
                                Male
                            </button>
                            <button class="btn btn-warning fw-bold text-white px-4 text-uppercase" type="submit" style="background-color: #f68b1e; border: none; font-size: 0.85rem;">
                                Female
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container pb-4">
            <div class="row g-4" style="font-size: 0.8rem;">
                
                <div class="col-6 col-md-3">
                    <h6 class="fw-bold mb-3 text-uppercase text-white-50" style="font-size: 0.75rem; letter-spacing: 1px;">Need Help?</h6>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Help Center</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Contact Us</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">How to shop on ${CompanyInfo.name}</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Delivery options & timelines</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Return & Refund Policy</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="fw-bold mb-3 text-uppercase text-white-50" style="font-size: 0.75rem; letter-spacing: 1px;">About Us</h6>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li><a href="#" class="text-muted text-decoration-none hover-white">About ${CompanyInfo.name}</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">${CompanyInfo.name} Careers</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Express Delivery service</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Terms and Conditions</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Privacy Notice</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="fw-bold mb-3 text-uppercase text-white-50" style="font-size: 0.75rem; letter-spacing: 1px;">Make Money</h6>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Sell on ${CompanyInfo.name}</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Become a Sales Consultant</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Become a Logistics Partner</a></li>
                        <li><a href="#" class="text-muted text-decoration-none hover-white">Join the Affiliate Program</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="fw-bold mb-3 text-uppercase text-white-50" style="font-size: 0.75rem; letter-spacing: 1px;">Join Us On</h6>
                    <div class="d-flex gap-3 mb-4 fs-5 text-muted">
                        <a href="#" class="text-muted hover-white"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-muted hover-white"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-muted hover-white"><i class="bi bi-youtube"></i></a>
                        <a href="#" class="text-muted hover-white"><i class="bi bi-twitter-x"></i></a>
                    </div>
                    
                    <h6 class="fw-bold mb-2 text-uppercase text-white-50" style="font-size: 0.75rem; letter-spacing: 1px;">Payment Methods</h6>
                    <div class="d-flex flex-wrap gap-2 text-muted fs-4">
                        <i class="bi bi-credit-card-2-front" title="Mastercard/Visa"></i>
                        <i class="bi bi-wallet2" title="Mobile Money"></i>
                        <i class="bi bi-cash-coin" title="Cash on Delivery"></i>
                    </div>
                </div>

            </div>
        </div>

        <div class="bg-black py-4 bg-opacity-25 border-top border-secondary border-opacity-25" style="font-size: 0.75rem;">
            <div class="container text-center">
                <p class="text-white-50 mb-2 text-uppercase fw-bold" style="font-size: 0.65rem;">Our International Markets</p>
                <div class="d-flex flex-wrap justify-content-center gap-3 mb-3 text-muted">
                    <a href="#" class="text-muted text-decoration-none hover-white">Algeria</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Egypt</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Ghana</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Ivory Coast</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Kenya</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Morocco</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Nigeria</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Senegal</a>
                    <a href="#" class="text-muted text-decoration-none hover-white">Tunisia</a>
                </div>
                
                <hr class="border-secondary my-3 opacity-25">
                
                <p class="text-muted mb-0 small">&copy; 2026 ${CompanyInfo.name} Marketplace. All Rights Reserved.</p>
            </div>
        </div>

    </footer>`
}