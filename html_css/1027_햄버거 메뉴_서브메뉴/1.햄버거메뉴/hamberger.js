// 필요한 요소들을 찾아서 변수에 담아둡니다.
const hamburgerWrap = document.querySelector('.hamburger_wrap');       // 햄버거 메뉴 전체
const hamburgerBtn = document.querySelector('.hamburger_btn');         // 메뉴 여는 버튼
const hamburgerClose = document.querySelector('.hamburger_close');     // 메뉴 닫는 X 버튼
const hamburgerOverlay = document.querySelector('.hamburger_overlay'); // 메뉴 바깥 어두운 배경

// 메뉴를 여는 함수
function hamburgerOpen() {
    hamburgerWrap.classList.add('hamburger_open'); // 열림 클래스 붙이기
    document.body.classList.add('hamburger_lock'); // 뒤쪽 화면 스크롤 막기
}

// 메뉴를 닫는 함수
function hamburgerCloseMenu() {
    hamburgerWrap.classList.remove('hamburger_open'); // 열림 클래스 빼기
    document.body.classList.remove('hamburger_lock'); // 스크롤 막은 것 풀기
}

// 햄버거 버튼을 누르면 메뉴 열기
hamburgerBtn.addEventListener('click', hamburgerOpen);

// X 버튼을 누르면 메뉴 닫기
hamburgerClose.addEventListener('click', hamburgerCloseMenu);

// 메뉴 바깥(어두운 배경)을 누르면 메뉴 닫기
hamburgerOverlay.addEventListener('click', hamburgerCloseMenu);