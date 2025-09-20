
// main.js
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('themeToggle');
    const body = document.body;

    // Only proceed if body exists
    if (!body) return;

    // Load saved theme preference
    if (toggle && localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        toggle.textContent = '☀️';
    }

    // Toggle theme on button click
    toggle?.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            toggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            toggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
});