$(document).ready(function(){
    $(".box").on("mouseenter",function(){
        $(this).animate({width:"50%",height:"200px"},300)
    })
    $(".box").on("mouseleave",function(){
        $(this).animate({width:"40%",height:"100"},300)
    })
}) 







































