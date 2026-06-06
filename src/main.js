import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollReveal from 'scrollreveal';
import { login, loginFunction } from './pages/auth/login';
import { signup, signupFunction } from './pages/auth/signup';
import { enterPassword, enterPasswordFunction } from './pages/auth/enter-password';
// import { forgotPassword } from './pages/auth/fp';
// import { enterPin } from './pages/auth/pin';
import { homePage, homePageFunction } from './home';
import { customerDashboardLayout } from './pages/member';
const app = document.getElementById('app');

export const CompanyInfo = {
    name: "Shoplenca",
    server: [
        'localhost',
        '127.0.0.1',
        '172.20.10.10'
    ].includes(window.location.hostname)
        ? 'http://localhost:3000/index.php'
        : '/api/index.php'
};

export const userData = {
    isLogin: false,
    user_id: localStorage.getItem('user_id') ?? 0,
    unique_id: sessionStorage.getItem('unique_id') ?? 0,
    cart_count: 0,
    data: []
};

const router = (path) => {
    const currentPath = window.location.pathname;
    if (path !== currentPath) {
        history.pushState({}, '', path + window.location.search);
    }
    loadPage(path);
};


 function loadPage(path) {
    switch (path) {
        case '/':
            app.innerHTML = homePage();
            homePageFunction();
            break;
       
        // === authentication
        case '/login':
            app.innerHTML = login();
            loginFunction();
            break;

        case '/enter-password':
            app.innerHTML=enterPassword()
            enterPasswordFunction()
            break;
      
        case '/forget-password':
            app.innerHTML=forgotPassword()
            break;
          
        case '/pin':
            app.innerHTML=enterPin()
            break; 


        case '/create-password':
            app.innerHTML =signup();
            signupFunction();
            break;
          
        case '/dashboard':
            app.innerHTML = customerDashboardLayout();
            break;

        default:
            app.innerHTML = `
                <h1>404 - Page Not Found</h1>
            `;
    }

    ScrollReveal().reveal('h1', {
        distance: '10px',
        duration: 1000
    });
}

window.addEventListener('load', () => {
    loadPage(window.location.pathname);
});

window.addEventListener('popstate', () => {
    loadPage(window.location.pathname);
});

document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (!link) return;
    e.preventDefault();
    router(link.getAttribute('href'));
});

export { router };