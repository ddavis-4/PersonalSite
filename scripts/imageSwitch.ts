document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');

    if (!imageContainer) return;

    // Create two image elements
    const img1 = document.createElement('img');
    img1.src = 'pictures/headShotBlue.png';
    img1.alt = 'Profile Image 1';
    img1.className = 'switch-image active';

    const img2 = document.createElement('img');
    img2.src = 'pictures/babyNinja.png';
    img2.alt = 'Profile Image 2';
    img2.className = 'switch-image';

    const img3 = document.createElement('img');
    img3.src = 'pictures/IMG_0864.png';
    img3.alt = 'Profile Image 3';
    img3.className = 'switch-image';

    // Add both images to the container
    imageContainer.appendChild(img1);
    imageContainer.appendChild(img2);
    imageContainer.appendChild(img3);


    // Add hover listeners to the container
    imageContainer.addEventListener('mouseenter', () => {
        img1.classList.remove('active');
        img2.classList.add('active');
    });

    imageContainer.addEventListener('mouseleave', () => {
        img2.classList.remove('active');
        img1.classList.add('active');
    });
});
