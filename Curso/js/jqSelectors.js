$(document).ready(function () {
    console.log('Listo');

    //id selector
    $("#red").css("background", "red").css("color", "white");
    $("#green").css("background", "green").css("color", "white");
    $("#blue").css("background", "blue").css("color", "white");

    //Class Selector
    $(".zebra").css("border", "5px dashed black");

    //Tag Selector
    $("p").click(function () {
        $(this).removeClass("zebra");
    });
});