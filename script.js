// script.js - Handles normal UI interactions natively associated with the page

document.addEventListener('DOMContentLoaded', () => {
    // 1. Simulating the Job Search Action
    const searchBtn = document.getElementById('demoSearchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert("This is a demo template! Job searching logic is simulated.");
        });
    }

    // 2. Handling the Close Modal logic manually
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            document.getElementById('securityModal').style.display = 'none';
        });
    }
    
    // 3. Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }
});
