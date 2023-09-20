$(document).ready(function(){
    $("#button").click(function(){
        var input = $("#text").val();

        var listItem = $("<li>");
            listItem.append("<input type='checkbox' class='checkbox'>" + input + "<span class='cross'>\u00d7</span>");
            listItem.addClass("task");

        $("#list").append(listItem);
        
        $("#text").val("");
    });

    $("ul").on("click", ".cross", function(){
        $(this).parent("li").fadeOut("fast");
    });

    $("ul").on("click", ".checkbox", function(){
        $(this).parent("li").toggleClass("strike");
    });
});