"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('rotating-title');
    if (!titleElement)
        return;
    const titles = [
        'TypeScript Developer',
        'Python Developer',
        'Developing Developer',
        'Computer Scientist'
    ];
    const defaultTitle = 'Developer';
    let currentIndex = 0;
    let intervalId = null;
    titleElement.textContent = defaultTitle;
    function cycleTitles() {
        titleElement.textContent = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }
    titleElement.addEventListener('mouseenter', () => {
        currentIndex = 0;
        cycleTitles();
        intervalId = setInterval(cycleTitles, 1000);
    });
    titleElement.addEventListener('mouseleave', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        currentIndex = 0;
        titleElement.textContent = defaultTitle;
    });
});
