$(document).ready(function(){
    // 스크롤 매직, 컨트롤러
    var controller = new ScrollMagic.Controller();

    // 스크롤매직 씬 생성
    var scene1 = new ScrollMagic.Scene({
	    triggerElement: ".main-wrap",
        triggerHook:  0, //0~1 ,
        duration: "100%"
    })
    .setPin(".main-wrap", {pushFollowers: false })
    .addTo(controller) // 컨트롤러 등록

    var scene1 = new ScrollMagic.Scene({
	    triggerElement: ".content-wrap01",
        triggerHook:  0, //0~1 ,
        duration: "1%"
    })
    .setPin(".content-wrap01", {pushFollowers: true })
    .addTo(controller) // 컨트롤러 등록


    AOS.init();

});