"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const imagePaths = ["pictures/pic1.png", "pictures/pic2.png"];
    const container = document.getElementById("random-image-container");
    if (!container)
        return; // Exit if the container is not found
    const selectedImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    container.innerHTML = `<img src="${selectedImage}" alt="Random Portfolio Image" style="max-width: 100%; border-radius: 10px;">`;
});
