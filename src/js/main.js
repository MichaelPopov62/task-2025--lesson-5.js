// main.js

// ======= ЗБІР РЕФЕРЕНСІВ =======
const themeToggleBtn = document.querySelector('[data-theme-toggle]');
const body = document.body;

// ======= ТЕМА =======

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.textContent =
      savedTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
  }
}

function toggleTheme() {
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  applySavedTheme();
}

// ======= ІНІЦІАЛІЗАЦІЯ =======

function initApp() {
  applySavedTheme();
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Тут буде код для ініціалізації задач
}

initApp();
