// This is the file for any general message I need to display on the page.
//
//
//
document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content'); // needs to be on the page to display the message

    // Example of generating content dynamically
    const generalContent = `
        <h4>Welcome to My Pro-tfolio!</h4>
        <p>Sorry! We're under construction.</p>
        <p>If you click this link from the 'Home' or index page it won't work.</p>
        <p>Soon to fix!</p>
        <a href="../pages/Resume.pdf">Resume</a>
    `;

    contentDiv.innerHTML += generalContent; // Append dynamic content to the existing content
});
