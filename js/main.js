/// <reference types="../@types/jquery/"/>

$(".singer1").on("click",function(){

    $(".info1").slideToggle(1000);
    $(".info2").slideUp(1000);
    $(".info3").slideUp(1000);
    $(".info4").slideUp(1000);

})

$(".singer2").on("click",function(){

    $(".info2").slideToggle(1000);
    $(".info1").slideUp(1000);
    $(".info3").slideUp(1000);
    $(".info4").slideUp(1000);
    

    
})

$(".singer3").on("click",function(){

    $(".info3").slideToggle(1000);
    $(".info1").slideUp(1000);
    $(".info2").slideUp(1000);
    $(".info4").slideUp(1000);
})

$(".singer4").on("click",function(){

    $(".info4").slideToggle(1000);
    $(".info2").slideUp(1000);
    $(".info3").slideUp(1000);
    $(".info1").slideUp(1000);

})

// [href^='#']


$(".settings .links .linkBox").on("click",function(e){

    const currentHref=$(e.target).attr("href")
    const sectionOffset=$(currentHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000)
})

$(".settings .links .innerBox i").on("click",function(){
    $(".settings").animate({width:"toggle"},500)
})

$("#home .open p").on("click",function(){
    $(".settings").animate({width:"toggle"},500)
})


$("#contact .info .row .col2 textarea").keyup(function(){
    let myLength=$("#contact .info .row .col2 textarea").val().length;

    let counter=Number($("#contact .info .row .col2 span").html(100-myLength));

    // if(myLength<100){
    //     $("#contact .info .row .col2 span").html(` <span>${100-myLength}</span> `);
    // }
    // else if(myLength>=100){
        
    //     $("#contact .info .row .col2 p").html("You have reached the limit");
    // }
    

})



// Set the date we're counting down to
var countDownDate = new Date("Aug 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);




  $("#details .container .days").html(days);
  $("#details .container .hours").html(hours);
  $("#details .container .minutes").html(minutes);
  $("#details .container .seconds").html(seconds);


  if (distance < 0) {
    
    $("#details .container .row").html("<p>You have reached the time limit</p>");
  }
}, 1000);