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
skillItems.forEach(function (iten) {
  const fill = iten.querySelector(".skill-fill");
  if (fill) {
    const level = fill.dataset.level;
    iten.setAttribute("data-tooltip", level + "%");
  }
});
