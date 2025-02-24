
export function initializeNavigation() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navbarToggler.addEventListener('click', function() {
    document.body.style.overflow = this.getAttribute('aria-expanded') === 'false' ? 'hidden' : 'auto';
  });

  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    document.body.style.overflow = 'auto';
  });
  
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
}
