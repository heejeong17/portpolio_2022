$(document).ready(function(){
  const swiper = new Swiper('.wrap > .slide-banner .swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.wrap > .slide-banner .swiper-pagination',
      clickable:true,
    },

    autoplay: {
      delay: 3000, // 5초마다 슬라이드 넘김
      disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
    },
  
  });

  AOS.init();

  $(".menu01 > li").click(function(){
    let indexnumber = $(this).index();
    // alert(indexnumber);
    $(".menu02").removeClass("active");
    $(".menu02").eq(indexnumber).addClass("active");
  });
});