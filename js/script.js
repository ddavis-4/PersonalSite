document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');

    // Example of generating content dynamically
    const dynamicContent = `
        <h3>Welcome to My Page!</h3>
        <p>This content was generated dynamically using JavaScript.</p>
    `;

    contentDiv.innerHTML += dynamicContent; // Append dynamic content to the existing content
});
