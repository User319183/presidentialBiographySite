export function initializeNavigation() {
    // Get references to the navbar toggle button and collapsible content
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Toggle body scroll when mobile menu is opened/closed
    navbarToggler.addEventListener('click', function () {
        // Prevent scrolling when menu is open, restore when closed
        document.body.style.overflow =
            this.getAttribute('aria-expanded') === 'false' ? 'hidden' : 'auto';
    });

    // Restore scrolling when navbar is collapsed by other means
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        document.body.style.overflow = 'auto';
    });

    // Close mobile menu when a navigation link is clicked
    document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Trigger navbar toggle to close the menu
            }
        });
    });
}
