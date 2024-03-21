// Define function to handle breadcrumb click event
function handleBreadcrumbClick() {
  const bioLink = document.querySelector('#breadcrumb a[href="#bio"]');
  const musicLink = document.querySelector('#breadcrumb a[href="#music"]');
  const eventsLink = document.querySelector('#breadcrumb a[href="#events"]');
  const galleryLink = document.querySelector('#breadcrumb a[href="#gallery"]');
  const contactLink = document.querySelector('#breadcrumb a[href="#contact"]');

  // Add event listener for each specific breadcrumb link
  bioLink.addEventListener('click', handleClick);
  musicLink.addEventListener('click', handleClick);
  eventsLink.addEventListener('click', handleClick);
  galleryLink.addEventListener('click', handleClick);
  contactLink.addEventListener('click', handleClick);

  // Function to handle click event
  function handleClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close the navbar on small screens after clicking on the specific breadcrumb link
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (window.innerWidth < 768 && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
}

// Call the functions on page load
window.onload = function () {
  generateBreadcrumb();
  handleBreadcrumbClick();
};
