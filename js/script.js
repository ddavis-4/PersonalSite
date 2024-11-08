document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');

    // Example of generating content dynamically
    const dynamicContent = `
        <h3>Welcome to My Page!</h3>
        <p>This content was generated dynamically using JavaScript.</p>
    `;

    contentDiv.innerHTML += dynamicContent; // Append dynamic content to the existing content

    // Create a sticky tab element
    const stickyTab = document.createElement('div');
    stickyTab.className = 'sticky-tab';
    stickyTab.innerHTML = `
        <p>Thank you for visiting! Please like and subscribe!</p>
        <button id="close-tab">X</button>
    `;

    // Append the sticky tab to the body
    document.body.appendChild(stickyTab);

    // Close button functionality
    document.getElementById('close-tab').addEventListener('click', function() {
        stickyTab.style.display = 'none'; // Hide the tab when clicked
    });
});
