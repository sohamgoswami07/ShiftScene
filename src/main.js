import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
  });
  
  const videoBg = document.querySelector(".video-background");
  const texts = document.querySelectorAll(".hover-text");
  let currentIndex;

  function goToSlide(index) {
    currentIndex = index;

    // Slide videos
    gsap.to(videoBg, {
      x: -index * 100 + "%",
      duration: 0.5,
      ease: "power3.inOut"
    });

    // Update text opacity
    texts.forEach((t, i) => {
      if (i === index) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });
  }

  // Hover triggers slide
  texts.forEach(text => {
    text.addEventListener("mouseenter", () => {
      goToSlide(Number(text.dataset.index));
    });
  });
  goToSlide(0); // initialize first text as active
});
