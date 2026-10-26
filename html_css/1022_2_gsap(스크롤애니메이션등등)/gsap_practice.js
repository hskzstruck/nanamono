 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

/*gsap.to는 원래위치 > 지정한 움직임
gsap.from은 지정한 움직임 > 원래 위치
- 일반적인 스크롤 애니메이션 (스크롤시 위로 올라오는 애니메이션 정도)은 from사용*/
gsap.to(".box1", {
  x: 200,
  opacity: 0.3,
  duration: 1
});

gsap.to(".box2", {
  y: 200,
  opacity: 0,
  duration: 0.7
});

gsap.fromTo(".box3",
  {scale: 0.5 },
  { scale: 1.5, duration: 1 }
);

const section_title = gsap.timeline();

section_title.from(".title", { y: -20, opacity: 0, duration: 0.5})
  tl.from(".des", { y: -20, opacity: 0, duration: 0.7 },)
  tl.from(".more_btn", { y: -20, opacity: 0, duration: 0.5});
 });

 gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
      trigger: ".grid_container",
      start: "top 80%",
      markers: true
    }
});
gsap.to("#pin_scrub h2", {
  scale: 1.5, // 스크롤하는 동안 1배 -> 1.8배로 서서히 커짐
  scrollTrigger: {
    trigger: "#pin_scrub",
    start: "top top",
    end: "+=130%",
    pin: true,   // .pin-wrap을 화면에 고정
    scrub: true  // 스크롤 정도 = scale 변화 정도
  }
});