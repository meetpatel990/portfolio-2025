document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.width = el.getAttribute("data-width");
                observer.unobserve(el); // Animate only once
            }
        });
    }, {
        threshold: 0.5
    });

    progressBars.forEach((bar) => {
        observer.observe(bar);
    });
});

var typed = new Typed("#typed", {
    strings: ["Frontend Web Developer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

AOS.init({ duration: 1000 });

// Typed.js Initialization
var options = {
    strings: ["Web Developer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
};

// Scroll to Top Functionality
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Skill Bar Animation
const skillBars = document.querySelectorAll(".skill-bar span");
window.addEventListener("scroll", function () {
    skillBars.forEach(bar => {
        const skillValue = bar.getAttribute("data-skill");
        if (isInViewport(bar)) {
            bar.style.width = skillValue;
        }
    });
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

