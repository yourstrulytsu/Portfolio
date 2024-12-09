const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    
    modal.style.display = "flex";
    modalImg.src = element.querySelector('img').src;
  
    // Adjust the modal image size
    modalImg.style.width = '100%';
    modalImg.style.height = 'auto';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "flex";
  }