$(document).ready(function(){
    $('.click').click(function(event){
        event.stopPropagation();
         $(".showup").slideToggle("slow");
    });
    $(".showup").on("click", function (event) {
        event.stopPropagation();
    });
});

$(document).on("click", function () {
    $(".showup").hide("slow");
});