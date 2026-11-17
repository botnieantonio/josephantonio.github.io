// "Hire me" button functionality
document.querySelector('#hire').addEventListener('click', () => {
    document.querySelector('#msg').textContent = 'Salamat! Babalikan kita.';
});

// Icon-Only Dark/Light Mode functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
const body = document.body;

function updateButtonUI(isDark) {
    if (isDark) {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    } else {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    }
}

// Check local storage for previously saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    updateButtonUI(true);
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isNowDark = body.classList.contains('dark-mode');
    
    updateButtonUI(isNowDark);
    
    // Save preference
    if (isNowDark) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});