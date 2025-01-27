// This is the file for the main message on the index page.
//
//
//
document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content'); // needs to be on the page to display the message

    // Example of generating content dynamically
    const mainContent = `
        <h4>Welcome to My Pro-tfolio!</h4>
        <p>Sorry! We're under construction.</p>
        <a href="pages/Resume.pdf">Resume</a>
        <a href="pages/Resume.pdf">Resume</a>
    `;

    contentDiv.innerHTML += mainContent; // Append main content to the existing content
});
