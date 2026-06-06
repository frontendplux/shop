export function forgotPassword(){
    return /*html*/`
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-12 col-md-6 col-lg-5 text-center">
                
                <!-- Logo Section -->
                <div class="mb-4">
                    <h1 class="fw-bold text-dark">${CompanyInfo.name} <span class="text-warning">★</span></h1>
                </div>

                <!-- Forgot Password Card -->
                <div class="card border-0 shadow-sm p-4">
                    <div class="card-body text-start">
                        <h5 class="card-title fw-bold mb-1">Forgot Password?</h5>
                        <p class="card-text text-muted small mb-4">Enter your e-mail address or phone number and we'll send you a link to reset your password.</p>

                        <form>
                            <!-- Input Field -->
                            <div class="form-floating mb-4">
                                <input type="email" class="form-control border-secondary-subtle" id="floatingRecoveryInput" placeholder="name@example.com" required>
                                <label for="floatingRecoveryInput" class="text-muted">Email or Phone Number</label>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-warning py-3 w-100 fw-bold text-white shadow-sm" style="background-color: #f68b1e; border: none;">
                                RESET PASSWORD
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Footer Link -->
                <div class="mt-4">
                    <p class="small text-muted">Remembered your password? <a href="#" class="text-warning text-decoration-none fw-bold">Back to login</a></p>
                </div>

            </div>
        </div>
    </div>`
}