const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function initialTheme() {
  if (isSystemDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleSwitch.checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleSwitch.checked = false;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

initialTheme();
toggleSwitch.addEventListener("change", switchTheme, false);
