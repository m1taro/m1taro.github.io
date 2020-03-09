$(function() {
    
    $("#hamburger").click(function() {
       if($(".navi-bar-item").hasClass("open")) {
           $(".navi-bar-item").removeClass("open").hide(".navi-item");
       } else {
           $(".navi-bar-item").addClass("open").show(".navi-item");
       }

       
    });
});
