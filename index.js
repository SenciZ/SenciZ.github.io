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

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

// const tl = gsap.timeline();
// tl.from(".aboutMePin", { xPercent: -100 })
//   .from(".skillsPin", { xPercent: 100 })
//   .from(".projectsPin", { yPercent: -100 })
//   .from(".contactPin", { xPercent: 100 });

ScrollTrigger.create({
  trigger: ".homePin",
  start: "top top",
  pinSpacing: false,
  pin: true,
  scrub: 2,
});
ScrollTrigger.create({
  trigger: ".aboutMePin",
  start: "top top",
  pinSpacing: false,
  pin: true,
  scrub: 2,
});
ScrollTrigger.create({
  trigger: ".skillsPin",
  start: "top top",
  pinSpacing: false,
  pin: true,
  scrub: 2,
});
ScrollTrigger.create({
  trigger: ".projectsPin",
  start: "bottom top",
  pinSpacing: false,
  pin: true,
  end: "+=3000",
  scrub: 2,
});
ScrollTrigger.create({
  trigger: ".contactPin",
  start: "top top",
  pinSpacing: false,
  pin: true,
  scrub: 2,
});

gsap.from(".myName", { duration: 1, opacity: "0", y: -500, ease: "bounce" });
gsap.from(".myTitle", {
  duration: 1,
  opacity: "0",
  filter: blur("40px"),
  // y: -500,
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
