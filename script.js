```javascript
/* ==============================
   Z3M — ZO3AMA CS
   JavaScript
   ============================== */


/* MOBILE MENU */

const menuButton = document.getElementById("menuButton");

let menuOpen = false;

menuButton.addEventListener("click", () => {

    menuOpen = !menuOpen;

    let existingMenu = document.querySelector(".mobile-nav");

    if (menuOpen) {

        if (!existingMenu) {

            const menu = document.createElement("nav");

            menu.className = "mobile-nav";

            menu.innerHTML = `
                <a href="#home">ACCUEIL</a>
                <a href="#about">À PROPOS</a>
                <a href="#community">COMMUNAUTÉ</a>
                <a href="#rules">RÈGLES</a>

                <a
                    href="https://discord.gg/ZQsHAbjCe"
                    target="_blank"
                >
                    REJOINDRE DISCORD ↗
                </a>
            `;

            document.body.appendChild(menu);
        }

    } else {

        if (existingMenu) {
            existingMenu.remove();
        }

    }

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.addEventListener("click", (event) => {

    if (
        event.target.closest(".mobile-nav a")
    ) {

        const menu = document.querySelector(".mobile-nav");

        if (menu) {
            menu.remove();
        }

        menuOpen = false;
    }

});


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".section, .feature-card, .rules-box, .join-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});


/* ACTIVE NAVIGATION */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* MOUSE PARALLAX */

const visual = document.querySelector(".hero-visual");

if (visual && window.innerWidth > 900) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;

        visual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* MEMBER COUNTER */

const memberCount = document.getElementById("memberCount");

if (memberCount) {

    const target = 160;

    let current = 0;

    const duration = 1200;

    const start = performance.now();

    function animateCounter(time) {

        const progress =
            Math.min((time - start) / duration, 1);

        current =
            Math.floor(progress * target);

        memberCount.textContent =
            current + "+";

        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        }

    }

    requestAnimationFrame(animateCounter);

}
```
