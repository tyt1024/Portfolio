 $(document).ready(function () {
     $("#reg1").click(function () {
         $(".pop").fadeIn(300);

         //positionPopup();
     });

     $(".pop-close").click(function (event) {
        event.stopPropagation();
         $(".pop").fadeOut(300);
     });
 });

     $("#reg2").click(function () {
         $(".pop2").fadeIn(300);
         //positionPopup();
     });

$(".pop2 > span, .pop2").click(function (event) {
    event.stopPropagation();
    $(".pop2").fadeOut(300);
     });