// Splash Screen
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splashScreen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
        }, 1500); // 1.5 seconds loading view
    }
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Highlighting active nav sections
    let current = "";
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerMenu');
const navLinks = document.querySelector('.nav-links');
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Hide mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Floating Actions Logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const progressCircle = document.querySelector('.progress-ring-circle');
if (progressCircle) {
    const radius = progressCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setProgress(scrollPercent);
    });
}

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
