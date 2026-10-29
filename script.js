
/* =========================================
   SPACE TECHNOLOGY
   Main JavaScript
   ========================================= */


/* ========== 1. MOBILE NAVIGATION ========== */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    // Open and close the mobile navigation menu
    menuToggle.addEventListener("click", function () {

        const isOpen = navbar.classList.toggle("active");

        // Update accessibility attributes
        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change the hamburger icon
        const menuIcon = menuToggle.querySelector("i");

        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-xmark", isOpen);
        }
    });


    // Close the menu after clicking a navigation link
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            const menuIcon = menuToggle.querySelector("i");

            if (menuIcon) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        });
    });


    // Close the menu when clicking outside it
    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navbar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            const menuIcon = menuToggle.querySelector("i");

            if (menuIcon) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        }
    });


    // Close the mobile menu when returning to desktop width
    window.addEventListener("resize", function () {

        if (window.innerWidth > 760) {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            const menuIcon = menuToggle.querySelector("i");

            if (menuIcon) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        }
    });
}


/* ========== 2. AUTOMATIC COPYRIGHT YEAR ========== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ========== 3. CONTACT BUTTON PLACEHOLDER ========== */

// We'll connect this button to the store's real email,
// phone number, or WhatsApp contact when those details are ready.

const contactButton = document.getElementById("contactButton");

if (contactButton) {

    contactButton.addEventListener("click", function (event) {

        if (contactButton.getAttribute("href") === "mailto:") {

            event.preventDefault();

            alert(
                "Contact details will be available here soon!"
            );
        }
    });
}
