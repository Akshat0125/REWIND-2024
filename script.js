const pages = document.querySelectorAll('.page');
let currentIndex = 0;

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active');
        if (i === index) {
            page.classList.add('active');
        }
    });
}

document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const action = arrow.getAttribute('data-action');
        if (action === 'next' && currentIndex < pages.length - 1) {
            currentIndex++;
        } else if (action === 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        showPage(currentIndex);
    });
});

// Initialize the first page
showPage(currentIndex);
