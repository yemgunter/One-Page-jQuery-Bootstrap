/**************************************************************
Name: Yolanda Gunter
Assignment: Coding 08
Purpose: Intro - jQuery and Boostrap
Notes: Learning jQuery & Boostrap to use for my Final Project
 **************************************************************/

"use strict";
        
$(document).ready(function(){
    
   
    // Syle for Back To Top
    $('#this-page-top').css("h5");
    
    // Header element with id header
    $('#header').css("text-align", "center");
    
    // Heading paragraph elements
    $('h1').css("text-align", "center");
    $('h2').css("text-align", "left");
    $('h3').css("text-align", "center");
    $('h4').css("text-align", "left");
    $('h5').css("text-align", "left");
    $('h6').css("text-align", "left");
    
    // About Image styling
    $('.photo').css("verticle-align", "middle");
    $('.photo').css("width", "200px");
    
     // Highlight form related styling and elements
    $('#form-div').css("text-align", "center");
    $('input[type="text"]').css("background", "yellow");
    $('input[type="email"]').css("background", "yellow");
    $('input[type="message"]').css("background", "yellow");
    
    $('.footer-section').css("background-color", "#e2d1dd");
});
