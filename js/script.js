const skillBars = document.querySelectorAll(".skill-fill");
const barObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.dataset.level;
        bar.style.width = level + "%";
        barObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.3 },
);
skillBars.forEach(function (bar) {
  barObserver.observe(bar);
});

const sections = document.querySelectorAll(".cv-section");
const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        const delay = index * 100;

        setTimeout(function () {
          entry.target.classList.add("visible");
        }, delay);

        sectionObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
sections.forEach(function (section) {
  sectionObserver.observe(section);
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach(function (item) {
  const fill = item.querySelector(".skill-fill");
  if (fill) {
    const level = fill.dataset.level;
    item.setAttribute("data-tooltip", level + "%");
  }
});

const cursorGlow = document.querySelector(".cursor-glow");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
if (cursorGlow && finePointer.matches) {
  document.body.classList.add("cursor-active");
  window.addEventListener("mousemove", function (e) {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  });
  const hoverTargets = document.querySelectorAll(
    "a, .exp-item, .skill-item",
  );
  hoverTargets.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      cursorGlow.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", function () {
      cursorGlow.classList.remove("cursor-hover");
    });
  });
}

const headerPhoto = document.querySelector(".header-photo");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (headerPhoto && !reduceMotion.matches) {
  window.addEventListener("scroll", function () {
    const offset = Math.min(window.scrollY * 0.08, 12);
    headerPhoto.style.transform = "translateY(" + offset + "px)";
  });
}
