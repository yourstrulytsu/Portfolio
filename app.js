const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.getElementById('image-container').addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      const imageUrl = event.target.src;
  
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100vw';
      modal.style.height = '100vh';
      modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.zIndex = '1000';
      modal.style.transition = "opacity 0.3s ease-in-out";
      modal.style.opacity = "0";
  
      setTimeout(() => modal.style.opacity = "1", 0);
  
      const fullImage = document.createElement('img');
      fullImage.src = imageUrl;
      fullImage.style.maxWidth = '90%';
      fullImage.style.maxHeight = '90%';
      fullImage.style.borderRadius = '10px';
      fullImage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
  
      modal.appendChild(fullImage);
  
      modal.addEventListener('click', () => {
        modal.remove();
      });
  
      document.body.appendChild(modal);
    }
  });
  
  // Handle mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navbarMenu = document.getElementById('navbar__menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });
  }