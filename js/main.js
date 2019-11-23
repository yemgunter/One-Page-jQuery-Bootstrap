/**************************************************************
Name: Yolanda Gunter
Assignment: Coding 08
Purpose: Intro - jQuery and Boostrap
Notes: Learning jQuery & Boostrap to use for my Final Project
 **************************************************************/

"use strict"
        
$(document).ready(function(){
     // Replace text button
    $("button").click(function(){
        $("p").text("Hello World!");         
    });
    // Highlight element with id mark
    $("#mark").css("background", "yellow");

    // Highlight elements with class mark
    $(".mark").css("background", "yellow");

    // Highlight paragraph elements
    $("p").css("background", "orange");
    
     // Highlight form field elements
    $('input[type="text"]').css("background", "yellow");
    $('input[type="password"]').css("background", "green");
});
