document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');

    // Example of generating content dynamically
    const dynamicContent = `
        <h3>Welcome to My Page!</h3>
        <p>YO We're under construction.</p>
    `;

    contentDiv.innerHTML += dynamicContent; // Append dynamic content to the existing content

    // Create a sticky tab element
    const stickyTab = document.createElement('div');
    stickyTab.className = 'sticky-tab';
    stickyTab.innerHTML = `
        <p>Thank you for visiting! Please like and subscribe!</p>
        <button id="like-button">Like</button>
        <button id="subscribe-button">Subscribe</button>
    `;

    // Append the sticky tab to the body
    document.body.appendChild(stickyTab);

    // Track button clicks
    let likeClicked = false;
    let subscribeClicked = false;

    // Like button functionality
    document.getElementById('like-button').addEventListener('click', function() {
        likeClicked = true;
        this.classList.add('clicked'); // Change button color to red
        checkButtons();
    });

    // Subscribe button functionality
    document.getElementById('subscribe-button').addEventListener('click', function() {
        subscribeClicked = true;
        this.classList.add('clicked'); // Change button color to red
        checkButtons();
    });

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

        // Remove the message after 3 seconds
        setTimeout(() => {
            message.style.display = 'none'; // Hide the message
            document.body.removeChild(message); // Remove the message from the DOM
        }, 3000);
    }
});
