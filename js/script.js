/*=============== SHOW MENU ===============*/
const navClose = document.getElementById("nav-close"),
  navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ON LINK CLICK ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== PARALLAX ===============*/
let parallax = new Rellax(".parallax");


/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home__pine", 1.2, { opacity: 0, y: 150, delay: 0.3 });
gsap.from(".home__mountain-2", 1.2, { opacity: 0, x: 150, delay: 0.5 });
gsap.from(".home__mountain-3", 1.2, { opacity: 0, x: 150, delay: 0.6 });
gsap.from(".home__mountain-1", 1.2, { opacity: 0, y: 250, delay: 0.7 });
gsap.from(".home__moon", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".home__trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home__title", 1.2, { opacity: 0, y: -60, delay: 1 });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 1500,
  delay: 400,
  reset: true,
});

sr.reveal(".about__data, .celebrate__img", { origin: "right" });
sr.reveal(".about__img, .celebrate__data", { origin: "left" });
sr.reveal(".send__card", { interval: 100 });
sr.reveal(".footer");
