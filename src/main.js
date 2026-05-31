import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollReveal from 'scrollreveal';
import { login } from './pages/auth/login';
import { signup } from './pages/auth/signup';
import { enterPassword } from './pages/auth/login2';
import { forgotPassword } from './pages/auth/fp';
import { enterPin } from './pages/auth/pin';
const app = document.getElementById('app');

 export const CompanyInfo={
      name:"Shoplenca"
}

const router = (path) => {
    const currentPath = window.location.pathname;
    if (path !== currentPath) {
        history.pushState({}, '', path + window.location.search);
    }
    loadPage(path);
};

async function loadPage(path) {
    switch (path) {
        case '/':
            app.innerHTML = login();
            break;

        // === authentication
        case '/login':
            app.innerHTML = login();
            break;

        case '/login2':
            app.innerHTML=enterPassword()
            break;

      
        case '/forget-password':
            app.innerHTML=forgotPassword()
            break;
          
        case '/pin':
            app.innerHTML=enterPin()
            break; 


        case '/signup':
            app.innerHTML =signup();
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