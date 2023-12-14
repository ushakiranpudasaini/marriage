 // Toggle mobile menu visibility
 document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('show');
  });

  // Close mobile menu
  document.getElementById('mobile-menu-close').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('show');
  });