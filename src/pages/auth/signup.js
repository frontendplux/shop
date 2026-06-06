import { CompanyInfo } from "../../main";

export function signup(){
    return /*html*/`
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-12 col-md-6 col-lg-6 text-center">
                
                <!-- Logo Section -->
                <div class="mb-4">
                    <h1 class="fw-bold text-dark">${CompanyInfo.name} <span class="text-warning">★</span></h1>
                </div>

                <!-- Signup Card -->
                <div class="card border-0 shadow-sm p-4">
                    <div class="card-body text-start">
                        <h5 class="card-title fw-bold mb-1">Create your password</h5>
                        <p class="card-text text-muted small mb-4">Create a secure password to finalize your ${CompanyInfo.name} account.</p>

                        <form id="signupForm">
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
                            <button id="signupBtn" type="submit" class="btn btn-warning py-3 w-100 fw-bold text-white shadow-sm" style="background-color: #f68b1e; border: none;">
                                CREATE ACCOUNT
                            </button>
                        </form>

                        <!-- Policy Text -->
                        <p class="text-center text-muted mt-4 mb-0" style="font-size: 0.75rem;">
                            By creating an account, you agree to our 
                            <a href="/privacy-policy" class="text-decoration-none">Privacy Policy</a> and 
                            <a href="/terms-and-conditions" class="text-decoration-none">Terms & Conditions</a>
                        </p>
                    </div>
                </div>

                <!-- Footer Link -->
                <div class="mt-4">
                    <p class="small text-muted">Already have an account? <a href="/login" class="text-warning text-decoration-none fw-bold">Log in</a></p>
                </div>

            </div>
        </div>
    </div>`
}


export function signupFunction() {

const form = document.getElementById('signupForm');

if (!form) return;

form.onsubmit = async (e) => {

    e.preventDefault();

    const email = new URLSearchParams(
        window.location.search
    ).get('u') || '';

    const password = document
        .getElementById('floatingPassword')
        .value
        .trim();

    const signupBtn =
        document.getElementById('signupBtn');

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
        alert('Invalid email address.');
        window.location.href = '/login';
        return;
    }

    if (!passwordRegex.test(password)) {
        alert(
            'Password must be at least 8 characters and contain letters and numbers.'
        );
        return;
    }

    signupBtn.disabled = true;

    signupBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm"></span>
        Creating account...
    `;

    try {

        const response = await fetch(
            CompanyInfo.server,
            {
                method: 'POST',
                headers: {
                    'Content-Type':
                        'application/json'
                },
                body: JSON.stringify({
                    action: 'auth',
                    type: 'signup',
                    email,
                    password
                })
            }
        ).then(res => res.text());
     console.log(response);
        const res = JSON.parse(response);

   

        if (!res.success) {

            alert(
                res.message ||
                'Signup failed.'
            );

            if (
                res.data?.redirect
            ) {
                window.location.href =
                    res.data.redirect;
            }

            return;
        }

        const userId =
            res.data.user_id;

        const uid =
            res.data.uid;

        const redirect =
            res.data.redirect ||
            '/dashboard';

        localStorage.setItem(
            'user_id',
            userId
        );

        sessionStorage.setItem(
            'uid',
            uid
        );

        window.location.href =
            redirect;

    } catch (error) {

        console.error(error);

        alert(
            'Something went wrong. Please try again.'
        );

    } finally {

        signupBtn.disabled = false;

        signupBtn.innerHTML =
            'CREATE ACCOUNT';
    }
};

}
