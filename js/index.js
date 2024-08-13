AOS.init();


const dropdownBox = document.querySelector('.dropdown-box');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownBtn = document.querySelector('.dropdown-btn');
const gnbli = document.querySelectorAll('.menu-gnb > li');


dropdownBox.addEventListener('click', function (e) {
  dropdownMenu.classList.toggle('act');
  dropdownBtn.classList.toggle('act');

  e.stopPropagation();

});


document.addEventListener('click', function (e) {
  // 클릭된 요소가 dropdown-box 내부에 속하지 않는 경우
  if (!dropdownBox.contains(e.target)) {
    dropdownMenu.classList.remove('act');
    dropdownBtn.classList.remove('act');
  }
});



gnbli.forEach(i => {
  i.addEventListener('mouseenter', function () {
    document.querySelector('.top-bar').classList.add('showback');
  });

  i.addEventListener('mouseleave', function () {
    document.querySelector('.top-bar').classList.remove('showback');
  });
});




// 스와이퍼

const swiper = new Swiper('.check-box .swiper', {

  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 0,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
