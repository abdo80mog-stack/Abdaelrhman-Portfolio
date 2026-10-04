// ========================================
// PORTFOLIO JAVASCRIPT
// Abdaelrhman Hamada
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // CUSTOM CURSOR
    // ========================================

    const cursor = document.querySelector(".cursor");
    const cursorGlow = document.querySelector(".cursor-glow");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let glowX = mouseX;
    let glowY = mouseY;


    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });


    function animateCursor() {

        // Main cursor
        cursorX += (mouseX - cursorX) * 0.25;
        cursorY += (mouseY - cursorY) * 0.25;

        if (cursor) {

            cursor.style.left = cursorX + "px";
            cursor.style.top = cursorY + "px";

        }


        // Glow
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;

        if (cursorGlow) {

            cursorGlow.style.left = glowX + "px";
            cursorGlow.style.top = glowY + "px";

        }


        requestAnimationFrame(animateCursor);

    }

    animateCursor();



    // ========================================
    // CURSOR TRAIL
    // ========================================

    const trailCount = 12;

    const trails = [];

    for (let i = 0; i < trailCount; i++) {

        const trail = document.createElement("div");

        trail.classList.add("cursor-trail");

        document.body.appendChild(trail);

        trails.push({
            element: trail,
            x: mouseX,
            y: mouseY
        });

    }


    function animateTrail() {

        let previousX = mouseX;
        let previousY = mouseY;


        trails.forEach((trail, index) => {

            trail.x +=
                (previousX - trail.x) *
                (0.25 - index * 0.012);

            trail.y +=
                (previousY - trail.y) *
                (0.25 - index * 0.012);


            trail.element.style.left =
                trail.x + "px";

            trail.element.style.top =
                trail.y + "px";


            previousX = trail.x;
            previousY = trail.y;

        });


        requestAnimationFrame(animateTrail);

    }

    animateTrail();



    // ========================================
    // HERO 3D EFFECT
    // ========================================

    const heroVisual =
        document.querySelector(".hero-visual");

    const codeWindow =
        document.querySelector(".code-window");

    const dashboard =
        document.querySelector(".dashboard-card");


    document.addEventListener("mousemove", (e) => {

        if (!heroVisual) return;


        const x =
            (e.clientX / window.innerWidth) - 0.5;

        const y =
            (e.clientY / window.innerHeight) - 0.5;


        if (codeWindow) {

            codeWindow.style.transform = `
                perspective(1000px)
                rotateY(${x * 14 - 8}deg)
                rotateX(${y * -10 + 5}deg)
                translate(${x * 12}px, ${y * 12}px)
            `;

        }


        if (dashboard) {

            dashboard.style.transform = `
                translate(
                    ${x * -25}px,
                    ${y * -25}px
                )
            `;

        }

    });



    // ========================================
    // HOVER EFFECT
    // ========================================

    const interactiveElements =
        document.querySelectorAll(
            "a, button, .skill-card, .project-card, .service-card"
        );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            if (cursor) {

                cursor.classList.add("cursor-hover");

            }

            if (cursorGlow) {

                cursorGlow.classList.add("glow-hover");

            }

        });


        element.addEventListener("mouseleave", () => {

            if (cursor) {

                cursor.classList.remove("cursor-hover");

            }

            if (cursorGlow) {

                cursorGlow.classList.remove("glow-hover");

            }

        });

    });



    // ========================================
    // SCROLL REVEAL
    // ========================================

    const animatedElements =
        document.querySelectorAll(
            ".section, .project-card, .service-card"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach((element) => {

        observer.observe(element);

    });



    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7, 10, 18, 0.94)";

            navbar.style.boxShadow =
                "0 20px 60px rgba(0,0,0,0.35)";

        } else {

            navbar.style.background =
                "rgba(7, 10, 18, 0.68)";

            navbar.style.boxShadow =
                "0 20px 50px rgba(0,0,0,0.25)";

        }

    });



    // ========================================
    // SMOOTH NAVIGATION
    // ========================================

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navigationLinks.forEach((link) => {

        link.addEventListener("click", (e) => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });



    // ========================================
    // PROJECT CARD TILT
    // ========================================

    const cards =
        document.querySelectorAll(
            ".project-card"
        );


    cards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;


            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0)";

        });

    });



    // ========================================
    // PAGE LOADED
    // ========================================

    document.body.classList.add("page-loaded");

});
// ========================================
// PROJECT MODAL
// ========================================

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalType =
    document.getElementById("modalType");

const modalTags =
    document.getElementById("modalTags");

const modalButtons =
    document.querySelectorAll(".project-button");


const projects = {

    pos: {

        type: "BUSINESS SYSTEM",

        title:
            "POS & Retail Management System",

        description:
            "A modern business management system designed for sales, inventory, products, customers and retail operations.",

        tags:
            ["POS", "Dashboard", "SQL", "Retail"]

    },


    ecommerce: {

        type: "E-COMMERCE",

        title:
            "Interactive E-Commerce Web App",

        description:
            "A modern online shopping experience with interactive UI, product presentation and a clean responsive interface.",

        tags:
            ["E-Commerce", "JavaScript", "UI/UX"]

    },


    portfolio: {

        type: "PERSONAL BRAND",

        title:
            "Personal Portfolio Website",

        description:
            "A premium developer portfolio focused on visual storytelling, modern UI, animations and responsive design.",

        tags:
            ["Portfolio", "CSS", "Animation", "Responsive"]

    }

};


modalButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const projectId =
            button.dataset.project;

        const project =
            projects[projectId];

        if (!project) return;


        modalType.textContent =
            project.type;

        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;


        modalTags.innerHTML = "";

        project.tags.forEach((tag) => {

            const span =
                document.createElement("span");

            span.textContent = tag;

            modalTags.appendChild(span);

        });


        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeProjectModal
    );


document.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "Escape") {

            closeProjectModal();

        }

    }
);
