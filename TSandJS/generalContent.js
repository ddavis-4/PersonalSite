"use strict";
// This is the file for any general message I need to display on the page.
//
//
//
document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.querySelector('.content'); // needs to be on the page to display the message
    if (contentDiv) {
        const generalContent = `
            <h4>Welcome to My Pro-tfolio!</h4>
            <p>Sorry! We're under construction.</p>
            <a href="../pages/Resume.pdf">Resume</a>
        `;
        contentDiv.innerHTML += generalContent; // Append dynamic content to the existing content
    }
});
