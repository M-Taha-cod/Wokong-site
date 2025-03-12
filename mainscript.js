document.querySelectorAll(".scroll-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document
      .querySelectorAll(".scroll-button")
      .forEach((btn) => btn.classList.remove("active"));

    // Add active class to the clicked button
    this.classList.add("active");

    // Get the target section ID from the button's data attribute
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// script.js
let isScrolling = false;

window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();

    if (!isScrolling) {
      isScrolling = true;

      const scrollDirection = event.deltaY > 0 ? 1 : -1;

      window.scrollBy({
        top: scrollDirection * window.innerHeight,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling = false;
        updateActiveButton();
      }, 500);
    }
  },
  { passive: false }
);

window.addEventListener("scroll", updateActiveButton);

function updateActiveButton() {
  const sections = document.querySelectorAll(".section");
  const buttons = document.querySelectorAll(".scroll-button");
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (
      sectionTop <= window.innerHeight / 2 &&
      sectionTop > -window.innerHeight / 2
    ) {
      currentSectionIndex = index;
    }
  });

  buttons.forEach((button, index) => {
    button.classList.remove("active");
    if (index === currentSectionIndex) {
      button.classList.add("active");
    }
  });
}

gsap.from(".header", {
  y: -200,
  duration: 1,
  delay: 0.5,
});

gsap.from(".scroll-btns", {
  x: -200,
  duration: 1,
  delay: 0.5,
});

gsap.from(".fixed, .fixed1", {
  x: 200,
  duration: 1,
  delay: 0.5,
});

gsap.from(".fixed-text", {
  x: -200,
  duration: 1,
  delay: 0.5,
});

gsap.from(".dest-text", {
  x: -1000,
  duration: 1,
  delay: 1,
});

gsap.from(".dis-text", {
  x: 1000,
  duration: 1,
  delay: 0.5,
});

gsap.from(".weapon", {
  y: 1000,
  duration: 1,
  delay: 0.5,
});

gsap.from(".first-line", {
  y: 1000,
  duration: 1,
  delay: 0.5,
});

gsap.from(".back-text1", {
  x: 1000,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".sec-div",
    start: "top center",
    end: "top center",
  },
});

gsap.from(".sec-div p", {
  x: -1000,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".sec-div",
    start: "top center",
    end: "top center",
  },
});

gsap.from(".third-info", {
  x: -1000,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".third-div",
    start: "top center",
    end: "top center",
  },
});

gsap.from(".fth-t1", {
  x: 1000,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".forth-div",
    start: "top center",
    end: "top center",
  },
});

gsap.from(".fth-t2", {
  x: -1000,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".forth-div",
    start: "top center",
    end: "top center",
  },
});
