// This is the file for the main message on the index page.
//
//
//
document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('contentDiv');

    if (contentDiv) {
        contentDiv.innerHTML = `
            <a href="pages/Resume.pdf">Resume</a>
            <a href="pages/Resume.pdf">Resume</a>
            <h4>Welcome to My Pro-tfolio!</h4>
            <p>Sorry! We're under construction.</p>
            <a href="pages/Resume.pdf">Resume</a>
            <a href="pages/Resume.pdf">Resume</a>
        `;
    }
});
