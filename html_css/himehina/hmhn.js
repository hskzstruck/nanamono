if (typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined") {
    console.error("GSAP 또는 ScrollTrigger를 불러오지 못했습니다.");
} else {
    gsap.registerPlugin(ScrollTrigger);}


// 기본 애니메이션
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

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// 일반적인 HTML 속성 애니메이션
function gsap_scroll(element, delayAdd = 0) {
    const effect = gsap_effect[element.dataset.gsap];

    if (!effect) return;

    if (reduceMotion) {
        gsap.set(element, {
            clearProps: "all"
        });
        return;
    }

    gsap.from(element, {
        ...effect,

        duration: Number(element.dataset.gsapDuration) || 0.9,
        delay: (Number(element.dataset.gsapDelay) || 0) + delayAdd,
        ease: "power3.out",

        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
}


// 순차 등장 그룹
const processed = new Set();

document.querySelectorAll("[data-gsap-stagger]").forEach(group => {
    const stagger = Number(group.dataset.gsapStagger) || 0;

    group.querySelectorAll("[data-gsap]").forEach((element, index) => {
        gsap_scroll(element, index * stagger);
        processed.add(element);
    });
});


// 개별 등장
document.querySelectorAll("[data-gsap]").forEach(element => {
    if (!processed.has(element)) {
        gsap_scroll(element);
    }
});


// TICKET / SCHEDULE 타이틀
// 왼쪽에서 오른쪽으로 글자가 드러남

 // TICKET / SCHEDULE 타이틀 애니메이션
if (!reduceMotion) {
    gsap.utils.toArray(".reveal_heading").forEach(heading => {
        const title = heading.querySelector("span");
        if (!title) return;

        gsap.fromTo(
            title,
            {
                clipPath: "inset(0 130% 0 0)"
            },
            {
                clipPath: "inset(0 0% 0 0)",
                duration: 2.0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heading,
                    start: "top 50%",
                    toggleActions: "play none none none",
                    once: true
                }
            }
        );
    });
} else {
    gsap.set(".reveal_heading span", {
        clipPath: "inset(0 0% 0 0)"
    });
}



// 메인 BUDOKAN
// 스크롤 구간 동안 화면을 고정하고 글자 색 채우기
const hero = document.querySelector(".hero_scroll");
const heroText = document.querySelector(".hero_scroll .fill_text");

if (hero && heroText && !reduceMotion) {
    gsap.to(heroText, {
        backgroundPosition: "0 0%",
        ease: "none",

        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=140%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
        }
    });
}


// UPGRADE
// 메인과 같은 방식으로 고정 및 색 채우기
const upgrade = document.querySelector(".upgrade_scroll");
const upgradeText = document.querySelector(".upgrade_scroll .fill_text");

if (upgrade && upgradeText && !reduceMotion) {
    gsap.to(upgradeText, {
        backgroundPosition: "0 0%",
        ease: "none",

        scrollTrigger: {
            trigger: upgrade,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
        }
    });
}


// 티켓팅 일정 목록: 아래에서 위로 stagger 등장

 // 스케줄 항목 순차 등장 애니메이션
const scheduleList = document.querySelector(".schedule_list");

if (scheduleList && !reduceMotion) {
    const items = scheduleList.querySelectorAll(".schedule_item");

    gsap.set(items, {
        y: 50,
        opacity: 0
    });

    ScrollTrigger.create({
        trigger: scheduleList,
        start: "top 85%",
        once: true,
        onEnter: () => {
            gsap.to(items, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                overwrite: true
            });
        }
    });
}



// 모바일 메뉴
const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is_open");

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "메뉴 닫기" : "메뉴 열기"
        );
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("is_open");
            menuBtn.setAttribute("aria-label", "메뉴 열기");
        });
    });
}


// 레이아웃 계산 갱신
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});