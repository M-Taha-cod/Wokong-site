// script.js
gsap.to(".background-img", {
  scale: 1.1, // Zoom in to 110%
  duration: 5, // Duration of the zoom-in
  ease: "power1.inOut",
  repeat: -0.5, // Repeat indefinitely
  yoyo: true, // Reverse the animation on repeat
});

// script.js
function animateSmoke() {
  const smoke = document.querySelector(".smoke1");
  const smoke1 = document.querySelector(".smoke2");
  const smoke2 = document.querySelector(".smoke3");
  const smoke3 = document.querySelector(".smoke4");
  const smoke4 = document.querySelector(".smoke5");
  const smoke5 = document.querySelector(".smoke6");

  gsap.fromTo(
    smoke,
    {
      x: 0, // Start at the bottom
      opacity: 0.3, // Start fully visible
    },
    {
      x: -10, // Move up
      opacity: 0.3, // Fade out
      duration: 3, // Duration of the upward animation
      ease: "power1.in", // Easing function
      onComplete: () => {
        // Move back down
        gsap.to(smoke, {
          x: 0, // Move back down to the original position
          opacity: 0.3, // Fade back in
          duration: 3, // Duration of the downward animation
          ease: "power1.out", // Easing function
          onComplete: animateSmoke, // Repeat the animation
          yoyo: true,
        });
      },
    }
  );

  gsap.fromTo(
    smoke1,
    {
      y: 0, // Start at the bottom
      opacity: 0.3, // Start fully visible
    },
    {
      y: -10, // Move up
      opacity: 0.3, // Fade out
      duration: 3, // Duration of the upward animation
      ease: "power1.in", // Easing function
      onComplete: () => {
        // Move back down
        gsap.to(smoke1, {
          y: 0, // Move back down to the original position
          opacity: 0.3, // Fade back in
          duration: 3, // Duration of the downward animation
          ease: "power1.out", // Easing function
          onComplete: animateSmoke,
          yoyo: true,
          // Repeat the animation
        });
      },
    }
  );

  gsap.fromTo(
    smoke2,
    {
      y: 0, // Start at the bottom
      opacity: 0.3, // Start fully visible
    },
    {
      y: -10, // Move up
      opacity: 0.3, // Fade out
      duration: 3, // Duration of the upward animation
      ease: "power1.in", // Easing function
      onComplete: () => {
        // Move back down
        gsap.to(smoke2, {
          y: 0, // Move back down to the original position
          opacity: 0.3, // Fade back in
          duration: 3, // Duration of the downward animation
          ease: "power1.out", // Easing function
          onComplete: animateSmoke,
          yoyo: true,
          // Repeat the animation
        });
      },
    }
  );

  gsap.fromTo(
    smoke3,
    {
      x: 0, // Start at the bottom
      opacity: 0.3, // Start fully visible
    },
    {
      x: -10, // Move up
      opacity: 0.3, // Fade out
      duration: 3, // Duration of the upward animation
      ease: "power1.in", // Easing function
      onComplete: () => {
        // Move back down
        gsap.to(smoke3, {
          x: 0, // Move back down to the original position
          opacity: 0.3, // Fade back in
          duration: 3, // Duration of the downward animation
          ease: "power1.out", // Easing function
          onComplete: animateSmoke,
          yoyo: true,
          // Repeat the animation
        });
      },
    }
  );

  gsap.fromTo(
    smoke4,
    {
      x: 0, // Start at the bottom
      opacity: 0.3, // Start fully visible
    },
    {
      x: -10, // Move up
      opacity: 0.3, // Fade out
      duration: 3, // Duration of the upward animation
      ease: "power1.in", // Easing function
      onComplete: () => {
        // Move back down
        gsap.to(smoke4, {
          x: 0, // Move back down to the original position
          opacity: 0.3, // Fade back in
          duration: 3, // Duration of the downward animation
          ease: "power1.out", // Easing function
          onComplete: animateSmoke,
          yoyo: true,
          // Repeat the animation
        });
      },
    }
  );

  gsap.fromTo(
    smoke5,
    {
      y: 0, // Start at the bottom
      opacity: 0.3, // Start fully visible
    },
    {
      y: -10, // Move up
      opacity: 0.3, // Fade out
      duration: 3, // Duration of the upward animation
      ease: "power1.in", // Easing function
      onComplete: () => {
        // Move back down
        gsap.to(smoke5, {
          y: 0, // Move back down to the original position
          opacity: 0.3, // Fade back in
          duration: 3, // Duration of the downward animation
          ease: "power1.out", // Easing function
          onComplete: animateSmoke,
          yoyo: true,
          // Repeat the animation
        });
      },
    }
  );
}

// Start the animation
animateSmoke();

// document
//   .getElementById("navigateButton")
//   .addEventListener("click", function () {
//     // Animate the current page upwards
//     gsap.to(document.body, {
//       y: -window.innerHeight,
//       duration: 0.5,
//       onComplete: function () {
//         // Wait for the new page to load before navigating
//         window.location.href = "mainpage.html"; // Change to your target page
//       },
//     });
//   });

document
  .getElementById("navigateButton")
  .addEventListener("click", function () {
    // Use GSAP to animate the page sliding down
    gsap.to("body", {
      y: "-100vh", // Move the body down by 100% of its height
      duration: 0.5, // Animation duration in seconds
      ease: "power2.inOut", // Easing function
      onComplete: function () {
        // Navigate to the second HTML file after the animation completes
        window.location.href = "mainpage.html";
      },
    });
  });
