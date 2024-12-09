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
        
        const fullImage = document.createElement('img'); 
        fullImage.src = imageUrl;
        fullImage.style.maxWidth = '90%';
        fullImage.style.maxHeight = '90%';
        fullImage.style.borderRadius = '10px';
        fullImage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';

        // Close modal on click
        modal.addEventListener('click', function () {
            modal.remove();
        });

        modal.appendChild(fullImage);
        document.body.appendChild(modal); 
    }
});