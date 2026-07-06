/* ==========================================
   HL FOOD PROCESSING INDUSTRY
   script.js
========================================== */

// Navbar background on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.style.background = "#0d3b1f";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
    } else {
        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.boxShadow = "none";
    }

});

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            new bootstrap.Collapse(navbarCollapse).hide();

        }

    });

});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});

// Product card hover animation
const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// Current year in footer (optional)
const footerYear = document.getElementById("year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

// Console message
console.log("HL FOOD PROCESSING INDUSTRY Website Loaded Successfully");
