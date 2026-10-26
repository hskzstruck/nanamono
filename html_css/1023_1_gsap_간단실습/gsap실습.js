document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-title1", {
  y: 150,
  opacity: 0,
  duration: 1,
    scrollTrigger: {
      trigger: ".section.about",
      start: "top 50%",
      markers: true
    }
});

gsap.from(".section-desc1", {
  y: 150,
  opacity: 0,
  duration: 1,
    scrollTrigger: {
      trigger: ".section.about",
      start: "top 50%",
      markers: true
    }
});

gsap.from(".about-img", {
  x: -150,
  opacity: 0,
  duration: 1
});

gsap.from(".about-text", {
  x: 150,
  opacity: 0,
  duration: 1
});

 gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
  scrollTrigger: {
      trigger: ".section.service",
      start: "top 50%",
      markers: true
    }
});

gsap.to(".pin-feature-text", {
  scale: 1.5, // 스크롤하는 동안 1배 -> 1.8배로 서서히 커짐
  scrollTrigger: {
    trigger: ".pin-feature",
    start: "top top",
    end: "+=130%",
    pin: true,   // .pin-wrap을 화면에 고정
    scrub: true  // 스크롤 정도 = scale 변화 정도
  }
});


});