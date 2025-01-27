// This is the file for the surprise message that appears when the user likes and subscribes.
//
//
//
//
//

document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');

    // Create the like and subscribe pop up
    const stickyTab = document.createElement('div');
    stickyTab.className = 'sticky-tab';
    stickyTab.innerHTML = `
        <p>Thank you for visiting! Please like and subscribe!</p>
        <button id="like-button">Like</button>
        <button id="subscribe-button">Subscribe</button>
    `;

    // Append to the body
    document.body.appendChild(stickyTab);

    // Track when buttons are clicked
    let likeClicked = false;
    let subscribeClicked = false;

    const newLocal = 'click';
    // Like button 
    const likeButton = document.getElementById('like-button');
    const subscribeButton = document.getElementById('subscribe-button');

    if (likeButton) {
        likeButton.addEventListener('click', function() {
            likeClicked = true;
            this.classList.add('clicked'); // Change button color to red 'hi style.css'
            checkButtons();
        });
    }

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            subscribeClicked = true;
            this.classList.add('clicked'); // Change button color to red 'hi style.css'
            checkButtons();
        });
    }

    // Function to check if both buttons are clicked
    function checkButtons() {
        if (likeClicked && subscribeClicked) {
            stickyTab.style.display = 'none'; // Hide the tab when both buttons are clicked
            showMessage(); // Show the message
        }
    }

    // Function to show the message
    function showMessage() {
        const message = document.createElement('div');
        message.className = 'popup-message'; // No slide-in class initially
        message.innerText = 'ROCK CHALK JAYHAWK, GO KU';
        document.body.appendChild(message);

        // Trigger the slide-in effect after appending
        setTimeout(() => {
            message.classList.add('slide-in'); // Add slide-in class to start animation
        }, 10); // Small timeout to ensure the class is applied after the element is in the DOM

        // Remove the message after 9 seconds
        setTimeout(() => {
            message.style.display = 'none'; // Hide the message
            document.body.removeChild(message); // Remove the message from the DOM
        }, 9000);
    }
});
