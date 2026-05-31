import { CompanyInfo } from "../../main";

export function signup(){
    return /*html*/`
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-12 col-md-6 col-lg-5 text-center">
                
                <!-- Logo Section -->
                <div class="mb-4">
                    <h1 class="fw-bold text-dark">${CompanyInfo.name} <span class="text-warning">★</span></h1>
                </div>

                <!-- Signup Card -->
                <div class="card border-0 shadow-sm p-4">
                    <div class="card-body text-start">
                        <h5 class="card-title fw-bold mb-1">Create your password</h5>
                        <p class="card-text text-muted small mb-4">Create a secure password to finalize your ${CompanyInfo.name} account.</p>

                        <form>
                            <!-- Password Input Field -->
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control border-secondary-subtle" id="floatingPassword" placeholder="Password" minlength="8" required>
                                <label for="floatingPassword" class="text-muted">Password</label>
                            </div>

                            <!-- Requirements Checklist (Optional but improves UX) -->
                            <div class="mb-4 text-muted" style="font-size: 0.8rem;">
                                <p class="mb-1">💡 Must be at least 8 characters long</p>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-warning py-3 w-100 fw-bold text-white shadow-sm" style="background-color: #f68b1e; border: none;">
                                CREATE ACCOUNT
                            </button>
                        </form>

                        <!-- Policy Text -->
                        <p class="text-center text-muted mt-4 mb-0" style="font-size: 0.75rem;">
                            By creating an account, you agree to our 
                            <a href="#" class="text-decoration-none">Privacy Policy</a> and 
                            <a href="#" class="text-decoration-none">Terms & Conditions</a>
                        </p>
                    </div>
                </div>

                <!-- Footer Link -->
                <div class="mt-4">
                    <p class="small text-muted">Already have an account? <a href="#" class="text-warning text-decoration-none fw-bold">Log in</a></p>
                </div>

            </div>
        </div>
    </div>`
}