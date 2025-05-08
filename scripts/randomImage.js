document.addEventListener("DOMContentLoaded", function () {
    var imagePaths = [
        "pictures/pic1.png", // add more pics as needed
        "pictures/pic2.png",
    ];
    var container = document.getElementById("random-image-container");
    if (container) {
        // Select a random image
        var randomIndex = Math.floor(Math.random() * imagePaths.length);
        var selectedImage = imagePaths[randomIndex];
        // Create an <img> element
        var img = document.createElement("img");
        img.src = selectedImage;
        img.alt = "Random Portfolio Image";
        img.style.maxWidth = "100%"; // Adjust as needed
        img.style.borderRadius = "10px";
        // Append the image to the container
        container.appendChild(img);
    }
});
