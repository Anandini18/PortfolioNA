const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("nav");
const toggleNavbar = () =>{
    nav_header.classList.toggle('active');
}

mobile_nav.addEventListener('click', ()=> toggleNavbar());

const nav_content = document.querySelector(".nav-content");
const link = document.querySelectorAll("a");
Array.from(link).forEach((e) => {
    e.addEventListener('click', () => {
        nav_header.classList.toggle('active');
    });
});

