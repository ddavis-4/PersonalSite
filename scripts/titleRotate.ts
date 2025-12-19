document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('rotating-title');

    if (!titleElement) return;

    const titles = [
        'Developer',
        'TypeScript Developer',
        'JavaScript Developer',
        'Python Developer',
        'Developing Developer',
        'Computer Scientist'
    ];

    let currentIndex = 0;
    titleElement.textContent = titles[currentIndex];

    titleElement.addEventListener('mouseenter', () => {
        currentIndex = (currentIndex + 1) % titles.length;
        titleElement.textContent = titles[currentIndex];
    });
});
