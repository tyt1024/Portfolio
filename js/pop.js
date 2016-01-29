 $(document).ready(function () {
     $("#reg1").click(function () {
         $(".pop").fadeIn(300);
         positionPopup();
     });

     $(".pop > span, .pop").click(function () {
         $(".pop").fadeOut(300);
     });
 });

     $("#reg2").click(function () {
         $(".pop2").fadeIn(300);
         positionPopup();
     });

$(".pop2 > span, .pop2").click(function () {
         $(".pop2").fadeOut(300);
     });