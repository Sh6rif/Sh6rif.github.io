document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto-type", {
    strings: ["Full Stack Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  });
});

document.querySelector(".home .btn").addEventListener("click", function () {
  const btn = this;
  btn.classList.add("btn-click");
  const link = document.createElement("a");
  link.href =
    "https://drive.usercontent.google.com/download?id=1dsVqOZ_b9R2E6XrnBjV69RlX8bFkx_wh&export=download&authuser=0&confirm=t&uuid=89acec60-42ff-4b36-9de0-c8952df629ff&at=APZUnTW_3cr6-hKxaAox0Jk4DRNN:1720890045557";
  link.click();
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: false,
    autoHeight: true,
  });

  var liel = document.querySelectorAll(".nav-li");
  var svgel = document.querySelectorAll(".nav-svg");

  document.querySelectorAll("nav ul li").forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      swiper.slideTo(index);
    });
  });

  swiper.on("slideChange", function () {
    let activeIndex = swiper.activeIndex;
    liel.forEach((li) => {
      li.classList.remove("active");
    });
    svgel.forEach((svg) => {
      svg.classList.remove("active-svg");
    });
    document.querySelectorAll("nav ul li")[activeIndex].classList.add("active");
    document.querySelectorAll(".nav-svg")[activeIndex].classList.add("active-svg");
  });

  var swiper2 = new Swiper(".swiper-container2", {
    direction: "vertical",
    loop: false,
    autoHeight: true,
  });

  var liel2 = document.querySelectorAll(".nav-li2");

  document.querySelectorAll(".work ul li").forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      swiper2.slideTo(index);
    });
  });

  swiper2.on("slideChange", function () {
    let activeIndex2 = swiper2.activeIndex;
    liel2.forEach((li) => {
      li.classList.remove("work-active");
    });
    document
      .querySelectorAll(".work ul li")
      [activeIndex2].classList.add("work-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });

    let hasRun = false;

    const options = {
      threshold: [0, 0.9],
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasRun) {
            odometer.update(value);
            hasRun = true;
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  };

  const projects = document.getElementById("projects");
  createOdometer(projects, 20);

  const hours = document.getElementById("hours");
  createOdometer(hours, 240);

  const months = document.getElementById("months");
  createOdometer(months, 12);

  const technologies = document.getElementById("technologies");
  createOdometer(technologies, 20);
});

VanillaTilt.init(document.querySelectorAll(".card"), {
  glare: true,
  reverse: true,
  "max-glare": 0.15,
});
