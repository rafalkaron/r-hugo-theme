const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    document.querySelector(".material-icons").innerHTML = "dark_mode";
  } else {
    document.querySelector(".material-icons").innerHTML = "light_mode";
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.querySelector(".material-icons").innerHTML = "dark_mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.querySelector(".material-icons").innerHTML = "light_mode";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
