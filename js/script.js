$(function() {
    
    $("#hamburger").click(function() {
       if($(".navi-bar-item").hasClass("open")) {
           $(".navi-bar-item").removeClass("open"),
           $(".navi-item").hide();
       } else {
           $(".navi-bar-item").addClass("open"),
           $(".navi-item").show();
       }

       $(".navi-item").click(function() {
        if($(".navi-bar-item").hasClass("open")) {
            $(".navi-bar-item").removeClass("open");
        }

        $(".navi-item").hide();
       });
    });

});
