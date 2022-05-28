const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const aboutLink = document.getElementById("paboutLink");
const skillsLink = document.getElementById("skillsLink");
const homeLink = document.getElementById("homeLink");
const contactLink = document.getElementById("contactLink");
const hamburgerMenu = document.getElementById("hamburgerMenu");

gsap.from(".myName", { duration: 1, opacity: "0", y: -500, ease: "bounce" });
gsap.from(".myTitle", {
  duration: 1,
  opacity: "0",
  y: -500,
  ease: "bounce",
  delay: 0.125,
});

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    document.getElementById("hamburger").innerHTML = "menu";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    document.getElementById("hamburger").innerHTML = "close";
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

hamburgerMenu.addEventListener("click", () => {
  menu.classList.remove("showMenu");
  document.getElementById("hamburger").innerHTML = "menu";

  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
});

axios.get("https://devduds.herokuapp.com/").then((res) => console.log("hit"));
