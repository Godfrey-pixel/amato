// Define breadcrumb items
const breadcrumbs = [
  { label: 'Home', link: '#' },
  { label: 'Bio', link: '#bio' },
  { label: 'Music', link: '#music' },
  { label: 'Events', link: '#events' },
  { label: 'Gallery', link: '#gallery' },
  { label: 'Contact', link: '#contact' },
];

// Function to generate breadcrumb menu
function generateBreadcrumb() {
  const breadcrumbDiv = document.getElementById('breadcrumb');
  const breadcrumbList = document.createElement('ul');

  breadcrumbs.forEach((item, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = item.label;
    link.href = item.link;
    listItem.appendChild(link);

    // Add click event listener to update content
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigateToSection(index);
    });

    breadcrumbList.appendChild(listItem);
  });

  breadcrumbDiv.appendChild(breadcrumbList);
}

// Function to navigate to a specific section based on breadcrumb index
function navigateToSection(index) {
  const sections = document.querySelectorAll('section');
  sections[index].scrollIntoView({ behavior: 'smooth' });
}

// Call the function to generate the breadcrumb menu
generateBreadcrumb();

// Toggle display of main menu
const mainMenu = document.getElementById('main-menu');
const breadcrumbMenu = document.getElementById('breadcrumb');

breadcrumbMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('show-menu');
});
