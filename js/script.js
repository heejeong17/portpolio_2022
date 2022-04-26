$(document).ready(function(){

    $(".wrap").fullpage({
        navigation: true , 
        navigationTooltips: [
            'test01',
            'test02',
            'test03',
            'test04',
            'footer'
        ]
    });

    var mySVG = $('.main-txt').drawsvg({
        duration : 1500 ,
    });
    mySVG.drawsvg('animate');

    $(".wrap > .img-list-wrap > .img-list > a > .img-box").mouseover(function(){

        var bg_data_num = $(this).attr("data-bg-no");
        $(".wrap > .img-list-wrap").addClass("animation-paused");
        $(".wrap").addClass(bg_data_num);

    });
    $(".wrap > .img-list-wrap > .img-list > a > .img-box").mouseleave(function(){

        var bg_data_num = $(this).attr("data-bg-no");
        $(".wrap > .img-list-wrap").removeClass("animation-paused");
        $(".wrap").removeClass(bg_data_num);

    });

    $(".center-txt").click(function(){
        $(".wrap").toggleClass("active")
    });

    
});