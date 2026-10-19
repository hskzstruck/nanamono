document.addEventListener('DOMContentLoaded', function () {

  /* 1) 상단 띠배너 - 세로 롤링 */
  new Swiper('.top-swiper', {
    direction: 'vertical',
    loop: true,
    speed: 500,
    autoplay: { delay: 3000, disableOnInteraction: false }
  });

  /* 2) 메인 비주얼 - 중앙 정렬 + 양옆 슬라이드가 보이는 루프 */
  new Swiper('.main-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    initialSlide: 1,
    speed: 700,
    grabCursor: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    navigation: { prevEl: '.vs-btn.prev', nextEl: '.vs-btn.next' }
  });

  /* 3) 리뷰 슬라이더 - 5열 x 2행 */
  new Swiper('.review-swiper', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    grid: { rows: 2, fill: 'row' },
    spaceBetween: 12,
    speed: 500,
    navigation: { prevEl: '.rv-btn.prev', nextEl: '.rv-btn.next' },
    breakpoints: {
      0:    { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 8 },
      600:  { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
      900:  { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 12 },
      1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 12 }
    }
  });

});
