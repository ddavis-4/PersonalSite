"use strict";
// This is the file for the main message on the index page.
//
//
//
document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
        const mainContent = `
            <h4>Welcome to My Pro-tfolio!</h4>
            <p>Sorry! We're under construction.</p>
            <a href="pages/Resume.pdf">Resume</a>
        `;
        contentDiv.innerHTML += mainContent;
    }
});
