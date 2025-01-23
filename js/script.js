document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');

    // Example of generating content dynamically
    const dynamicContent = `
        <h1>Welcome to My Pro-tfolio!</h1>
        <p>Sorry! We're under construction.</p>
        <p>If you click this link from the 'Home' or index page it won't work.</p>
        <p>Soon to fix</p>
        <a href="../pages/Resume.pdf">Resume</a>
    `;

    contentDiv.innerHTML += dynamicContent; // Append dynamic content to the existing content

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
    document.getElementById('like-button').addEventListener('click', function() {
        likeClicked = true;
        this.classList.add('clicked'); // Change button color to red 'hi style.css'
        checkButtons();
    });

    // Subscribe button 
    document.getElementById('subscribe-button').addEventListener('click', function() {
        subscribeClicked = true;
        this.classList.add('clicked'); // Change button color to red 'hi style.css'
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

        // Remove the message after 9 seconds
        setTimeout(() => {
            message.style.display = 'none'; // Hide the message
            document.body.removeChild(message); // Remove the message from the DOM
        }, 9000);
    }
});


let lastScrollTop = 0; // Variable to store the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-100px'; // Hide the navbar (adjust this value based on your navbar height)
    } else {
        // Scrolling up
        navbar.style.top = '0'; // Show the navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position
});

document.addEventListener("DOMContentLoaded", function() {
    

    let lastScrollTop = 0; // Variable to store the last scroll position
    const navbar = document.querySelector('.navbar'); // Select the navbar

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = '-100px'; // Hide the navbar (adjust this value based on your navbar height)
        } else {
            // Scrolling up
            navbar.style.top = '0'; // Show the navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position
    });
});