"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    if (!imageContainer)
        return;
    // Create three image elements
    const img1 = document.createElement('img');
    img1.src = '/pictures/headShotBlue.jpg';
    img1.alt = 'Profile Image 1';
    img1.className = 'switch-image active';
    const img2 = document.createElement('img');
    img2.src = '/pictures/babyNinja.jpg';
    img2.alt = 'Profile Image 2';
    img2.className = 'switch-image';
    const img3 = document.createElement('img');
    img3.src = '/pictures/IMG_0864.jpeg';
    img3.alt = 'Profile Image 3';
    img3.className = 'switch-image';
    // Add all images to the container
    imageContainer.appendChild(img1);
    imageContainer.appendChild(img2);
    imageContainer.appendChild(img3);
    const images = [img1, img2, img3];
    let currentImageIndex = 0;
    // Cycle through images on hover
    imageContainer.addEventListener('mouseenter', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    });
    imageContainer.addEventListener('mouseleave', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = 0;
        images[currentImageIndex].classList.add('active');
    });
});
