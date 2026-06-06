export function enterPin(){
    return /*html*/`
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-12 col-md-6 col-lg-5 text-center">
                
                <!-- Logo Section -->
                <div class="mb-4">
                    <h1 class="fw-bold text-dark">${CompanyInfo.name} <span class="text-warning">★</span></h1>
                </div>

                <!-- PIN Verification Card -->
                <div class="card border-0 shadow-sm p-4">
                    <div class="card-body text-start">
                        <h5 class="card-title fw-bold mb-1">Verify your identity</h5>
                        <p class="card-text text-muted small mb-4">We've sent a 5-digit verification code to your device. Please enter it below.</p>

                        <form>
                            <!-- 5-Digit Inputs Row (Responsive Flexbox) -->
                            <div class="d-flex justify-content-between gap-2 mb-4">
                                <input type="text" class="form-control text-center py-3 fs-4 border-secondary-subtle" maxlength="1" pattern="[0-9]*" inputmode="numeric" required aria-label="Digit 1">
                                <input type="text" class="form-control text-center py-3 fs-4 border-secondary-subtle" maxlength="1" pattern="[0-9]*" inputmode="numeric" required aria-label="Digit 2">
                                <input type="text" class="form-control text-center py-3 fs-4 border-secondary-subtle" maxlength="1" pattern="[0-9]*" inputmode="numeric" required aria-label="Digit 3">
                                <input type="text" class="form-control text-center py-3 fs-4 border-secondary-subtle" maxlength="1" pattern="[0-9]*" inputmode="numeric" required aria-label="Digit 4">
                                <input type="text" class="form-control text-center py-3 fs-4 border-secondary-subtle" maxlength="1" pattern="[0-9]*" inputmode="numeric" required aria-label="Digit 5">
                            </div>

                            <!-- Verify Button -->
                            <button type="submit" class="btn btn-warning py-3 w-100 fw-bold text-white shadow-sm" style="background-color: #f68b1e; border: none;">
                                VERIFY
                            </button>
                        </form>

                        <!-- Resend Option -->
                        <div class="text-center mt-4">
                            <p class="small text-muted mb-0">Didn't receive the code? <a href="#" class="text-warning text-decoration-none fw-bold">Resend Code</a></p>
                        </div>
                    </div>
                </div>

                <!-- Footer Link -->
                <div class="mt-4">
                    <p class="small text-muted"><a href="#" class="text-warning text-decoration-none fw-bold">Try another verification method</a></p>
                </div>

            </div>
        </div>
    </div>`
}