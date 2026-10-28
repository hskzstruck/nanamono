// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);


// 애니메이션 효과 설정
const gsap_effect = {
    up: {
        y: 50,
        opacity: 0
    },

    down: {
        y: -50,
        opacity: 0
    },

    left: {
        x: 50,
        opacity: 0
    },

    right: {
        x: -50,
        opacity: 0
    },

    fade: {
        opacity: 0
    },

    zoom_in: {
        scale: 0.8,
        opacity: 0
    },

    zoom_out: {
        scale: 1.2,
        opacity: 0
    }
};


// 애니메이션 실행 함수
function gsap_scroll(element, delay_add = 0) {
    // HTML에 설정한 애니메이션 이름
    const effect_name = element.dataset.gsap;

    // 효과 이름에 해당하는 설정 가져오기
    const effect_option = gsap_effect[effect_name];

    // 등록되지 않은 효과라면 실행하지 않음
    if (!effect_option) return;

    // HTML에서 속성값 가져오기
    const duration = Number(element.dataset.gsapDuration) || 0.8;
    const delay = Number(element.dataset.gsapDelay) || 0;

    // 애니메이션 실행
    gsap.from(element, {
        ...effect_option,

        duration: duration,
        delay: delay + delay_add,
        ease: "power2.out",

        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
}


// 이미 순차 등장 처리한 요소를 저장
const gsap_processed = new Set();


// 순차 등장 설정이 있는 그룹 찾기
document.querySelectorAll("[data-gsap-stagger]").forEach(function (group) {
    const stagger = Number(group.dataset.gsapStagger) || 0;
    const elements = group.querySelectorAll("[data-gsap]");

    elements.forEach(function (element, index) {
        gsap_scroll(element, index * stagger);
        gsap_processed.add(element);
    });
});


// 일반 애니메이션 실행
document.querySelectorAll("[data-gsap]").forEach(function (element) {
    if (gsap_processed.has(element)) return;

    gsap_scroll(element);
});