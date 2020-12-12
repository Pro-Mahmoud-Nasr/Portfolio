// VANILLA JAVASCRIPT:

// SELECTORS:

const windowHeight = window.innerHeight/1.3;

const body = document.documentElement;

const header = document.querySelector("#home");

const nav = document.querySelector("nav");

const logo = document.querySelector(".logo a");

const mainLinks = document.querySelector(".main-links");

const links = document.querySelectorAll(".main-links li a");

const cog = document.querySelector(".fa-cog");

const settingsBox = document.querySelector(".settings-box");

const settingsBoxP = document.querySelectorAll(".settings-box p");

const nightModeBtn = document.querySelector(".settings-box input");

const colorsLi = document.querySelectorAll(".settings-box ul li")

const headerLeft = document.querySelector(".header-left");

const headerLeftP = document.querySelectorAll(".header-left p");

const about = document.querySelector(".about");

const aboutH = document.querySelector(".about .about-h");

const aboutLeftImg = document.querySelector(".about-left img");

const aboutRightH2 = document.querySelector(".about-right h2");

const aboutRightP = document.querySelector(".about-right p");

const portfolio = document.querySelector(".portfolio");

const portfolioH = document.querySelector(".portfolio .portfolio-h");

const portfolioGallery = document.querySelector(".portfolio-gallery");

const contact = document.querySelector(".contact");

const contactH = document.querySelector(".contact .contact-h");

const contactForm = document.querySelector(".contact form");

const contactInput = document.querySelectorAll(".contact form input");

const contactTextarea = document.querySelector(".contact form textarea");

const contactBtn = document.querySelector('.contact form input[type="button"]');

const burger = document.querySelector(".burger");

const burgerLine = document.querySelectorAll(".burger *");

const burgerContainer = document.querySelector(".burger-container");

const topBtn = document.querySelector(".fa-angle-up");

// COSTUMIZE THE LINK AND ADD THE ACTIVE CLASS:

links.forEach(link => {

  link.addEventListener("click", (e) => {

    const linkActive = document.querySelector(".main-links li a.active");

    linkActive.classList.remove("active");

    link.classList.add("active");

  });

});

// ADDING CLICK EVENT TO THE COG:

cog.addEventListener("click", () => {

  cog.classList.toggle("active");

  settingsBox.classList.toggle("active");

});

// TOGGLE THE NIGHT CLASS ON THE ELEMENTS:

nightModeBtn.addEventListener("click", () => {

  links.forEach(link => {

    link.classList.toggle("night");

  });

  nav.classList.toggle("night");

  headerLeft.classList.toggle("night");

  headerLeftP.forEach(p => {

    p.classList.toggle("night");

  });

  settingsBox.classList.toggle("night");

  settingsBoxP.forEach(p => {

    p.classList.toggle("night");

  });

  cog.classList.toggle("night");

  nightModeBtn.classList.toggle("night");

  about.classList.toggle("night");

  aboutRightH2.classList.toggle("night");

  aboutRightP.classList.toggle("night");

  portfolio.classList.toggle("night");

  contact.classList.toggle("night");

  contactInput.forEach(input => {

    input.classList.toggle("night");

  });

  contactTextarea.classList.toggle("night");

  contactBtn.classList.remove("night");

  burgerContainer.classList.toggle("night");

  topBtn.classList.toggle("night");

});

// CHANGING THE MAIN COLOR BY THE COLORS LIST:

colorsLi.forEach(li => {

  li.addEventListener("click", (e) => {

    body.style.setProperty("--main-color", e.target.getAttribute("data-color"));

  });

});

// ADDING SCROLLING EFFECT TO THE ABOUT SECTION:

window.addEventListener("scroll", () => {

  const aboutPosition = about.getBoundingClientRect().top;

  if(aboutPosition < windowHeight){

    aboutH.classList.add("apear");

    aboutLeftImg.classList.add("apear");

    aboutRightH2.classList.add("apear");

    aboutRightP.classList.add("apear");

  }

});

// ADDING SCROLLING EFFECT TO THE PORTFOLIO SECTION:

window.addEventListener("scroll", () => {

  const portfolioPosition = portfolio.getBoundingClientRect().top;

  if(portfolioPosition < windowHeight){

    portfolioH.classList.add("apear");

    portfolioGallery.classList.add("apear");

  }

});

// ADDING SCROLLING EFFECT TO THE CONTACT SECTION:

window.addEventListener("scroll", () => {

  const contactPosition = contact.getBoundingClientRect().top;

  if(contactPosition < windowHeight){

    contactH.classList.add("apear");

    contactForm.classList.add("apear");

  }

});

// ADD THE CLICK EVENT TO THE BURGER ICON:

burger.addEventListener("click", () => {

  burgerContainer.classList.toggle("active");

  burgerLine.forEach(line => {

    line.classList.toggle("active");

  });

});

// ADDING SCROLLING EVENT TO THE TOP BTN:

window.addEventListener("scroll", () => {

  const windowScrollY = window.scrollY;

  if(windowScrollY > 100){

    topBtn.classList.add("apear");

  }else{

    topBtn.classList.remove("apear");

  }

});
