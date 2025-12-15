const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

document.getElementById("year").textContent = new Date().getFullYear();

function setTheme(mode){
  if(mode === "light"){
    root.setAttribute("data-theme","light");
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme","light");
  } else {
    root.removeAttribute("data-theme");
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme","dark");
  }
}

const saved = localStorage.getItem("theme");
setTheme(saved === "light" ? "light" : "dark");

themeBtn.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});
