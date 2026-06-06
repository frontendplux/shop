import { CompanyInfo } from "../../main";

export function enterPassword(){
    return /*html*/`
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-12 col-md-6 col-lg-5 text-center">
                
                <!-- Logo Section -->
                <div class="mb-4">
                    <h1 class="fw-bold text-dark">${CompanyInfo.name} <span class="text-warning">★</span></h1>
                </div>

                <!-- Password Card -->
                <div class="card border-0 shadow-sm p-4">
                    <div class="card-body text-start">
                        <h5 class="card-title fw-bold mb-1">Welcome back</h5>
                        <p class="card-text text-muted small mb-4">Enter your password to access your ${CompanyInfo.name} account.</p>

                        <form id="loginForm">
                            <!-- Password Input Field -->
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control border-secondary-subtle" id="floatingLoginPassword" placeholder="Password" required>
                                <label for="floatingLoginPassword" class="text-muted">Password</label>
                            </div>

                            <!-- Forgot Password Link -->
                            <div class="text-end mb-4">
                                <a href="/forget-password" class="text-warning text-decoration-none small fw-bold">Forgot Password?</a>
                            </div>

                            <!-- Login Button -->
                            <button id="loginBtn" type="submit" class="btn btn-warning py-3 w-100 fw-bold text-white shadow-sm" style="background-color: #f68b1e; border: none;">
                                LOG IN
                            </button>
                        </form>

                        <!-- Secondary Option -->
                        <div class="text-center mt-4">
                            <a href="/pin" class="text-decoration-none text-muted small">Login with verification code instead</a>
                        </div>
                    </div>
                </div>

                <!-- Footer Link -->
                <div class="mt-4">
                    <p class="small text-muted">Not your account? <a href="/login" class="text-warning text-decoration-none fw-bold">Switch account</a></p>
                </div>

            </div>
        </div>
    </div>`
}


export function enterPasswordFunction() {

document.getElementById('loginForm').onsubmit = async (e) => {
    e.preventDefault();
    const email = new URLSearchParams(
        window.location.search
    ).get('u') || '';
    const password = document
        .getElementById('floatingLoginPassword')
        .value
        .trim();

    const loginBtn =
        document.getElementById('loginBtn');

    if (!email) {
        alert('Invalid login session.');
        window.location.href = '/login';
        return;
    }

    if (!password) {
        alert('Password is required.');
        return;
    }

    loginBtn.disabled = true;

    loginBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm"></span>
        Logging in...
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
                    type: 'loginPassword',
                    email,
                    password
                })
            }
        ).then(res => res.text());
        console.log(response);
        
        const res = JSON.parse(response);

        console.log(res);

        if (!res.success) {

            alert(
                res.message ||
                'Login failed.'
            );

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

        loginBtn.disabled = false;

        loginBtn.innerHTML =
            'LOG IN';
    }
};

}
