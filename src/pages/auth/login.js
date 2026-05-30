import { CompanyInfo } from "../../main";

export function login(){
    return/*html*/`
    <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 col-md-6 col-lg-4 text-center">
            
            <!-- Logo Section -->
            <div class="mb-4">
                <h1 class="fw-bold text-dark">${CompanyInfo.name} <span class="text-warning">★</span></h1>
            </div>

            <!-- Login Card -->
            <div class="card border-0 shadow-sm p-4">
                <div class="card-body text-start">
                    <h5 class="card-title fw-bold mb-1">Welcome to ${CompanyInfo.name}</h5>
                    <p class="card-text text-muted small mb-4">Type your e-mail or phone number to log in or create a Jumia account.</p>

                    <form>
                        <!-- Input Field -->
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control border-secondary-subtle" id="floatingInput" placeholder="name@example.com" required>
                            <label for="floatingInput" class="text-muted">Email or Phone Number</label>
                        </div>

                        <!-- Continue Button (Jumia Orange via Bootstrap Warning) -->
                        <button type="submit" class="btn btn-warning w-full py-3 w-100 fw-bold text-white shadow-sm" style="background-color: #f68b1e; border: none;">
                            CONTINUE
                        </button>
                    </form>

                    <!-- Divider -->
                    <div class="d-flex align-items-center my-4">
                        <hr class="flex-grow-1">
                        <span class="mx-2 text-muted small">OR</span>
                        <hr class="flex-grow-1">
                    </div>

                    <!-- Facebook Button -->
                    <button class="btn btn-primary w-100 py-2 fw-bold mb-4 d-flex align-items-center justify-content-center">
                        <span class="me-2">f</span> Log in with Facebook
                    </button>

                    <!-- Policy Text -->
                    <p class="text-center text-muted" style="font-size: 0.75rem;">
                        For further information, read our 
                        <a href="#" class="text-decoration-none">Privacy Policy</a> and 
                        <a href="#" class="text-decoration-none">Terms & Conditions</a>
                    </p>
                </div>
            </div>

            <!-- Footer Link -->
            <div class="mt-4">
                <p class="small text-muted">Need help? <a href="#" class="text-warning text-decoration-none fw-bold">Contact us</a></p>
            </div>

        </div>
    </div>
</div>`
}