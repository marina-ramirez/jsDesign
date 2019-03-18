$("a").click(function(){
   var idVal= $(this).attr("href");
   $("html, body").animate(keyframes:{
        'scrollTop':$(idVal+"Section").offset().top
    }, options:1000)
});