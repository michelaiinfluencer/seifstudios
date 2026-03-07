/**
 * Seif Studios - Navigation Component
 */

const navContent = `
  <header class="site-header" id="mainHeader">
    <nav>
      <!-- Subpage Mini Logo (Left Corner) -->
      <a href="index.html" class="nav-sub-logo" id="navSubLogo">
        Seif Studios
      </a>

      <ul class="nav-links">
        <li><a href="index.html" data-page="index">Home</a></li>
        <li><a href="solutions.html" data-page="solutions">Solutions</a></li>
        <li><a href="portfolio.html" data-page="portfolio">Portfolio</a></li>
        <li><a href="workflow.html" data-page="workflow">Workflow</a></li>
        <li><a href="contact.html" data-page="contact">Contact</a></li>
      </ul>

      <div class="menu-toggle" id="menuToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <!-- Home Page Big Logo (Hidden on subpages) -->
    <div class="logo-wrap" id="homeLogoWrap">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-text">
          <span class="nav-logo-name">Seif</span>
          <span class="nav-logo-sub">Studios</span>
        </div>
      </a>
    </div>
  </header>

  <div class="mobile-nav">
    <ul class="mobile-nav-links">
      <li><a href="index.html" data-page="index">Home</a></li>
        <li><a href="solutions.html" data-page="solutions">Solutions</a></li>
        <li><a href="portfolio.html" data-page="portfolio">Portfolio</a></li>
        <li><a href="workflow.html" data-page="workflow">Workflow</a></li>
        <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>
  </div>
`;

function initNav() {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  placeholder.innerHTML = navContent;

  const isHome = document.body.classList.contains('home');
  const path = window.location.pathname;
  const page = path.split("/").pop().split(".")[0] || 'index';

  // Set active link
  const allLinks = document.querySelectorAll(`[data-page="${page}"]`);
  allLinks.forEach(link => link.classList.add('active'));

  const header = document.getElementById('mainHeader');
  const subLogo = document.getElementById('navSubLogo');
  const homeLogo = document.getElementById('homeLogoWrap');

  if (isHome) {
    if (subLogo) subLogo.style.display = 'none';
    if (homeLogo) homeLogo.style.display = 'flex';
    header.classList.remove('scrolled');
  } else {
    if (subLogo) subLogo.style.display = 'flex'; // Use flex for centering logic
    if (homeLogo) homeLogo.style.display = 'none';
    header.classList.add('scrolled');
  }

  // Re-bind menu toggle logic (since elements were just added)
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.onclick = () => {
      document.body.classList.toggle('menu-open');
    };
  }

  // Close menu on link click
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(link => {
    link.onclick = () => {
      document.body.classList.remove('menu-open');
    };
  });
}

// Run as soon as DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}
