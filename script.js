$(document).ready(function() {

    // Hide / Show
    $("#hideBtn").click(function(){
      $("#kotak1").hide();
    });
  
    $("#showBtn").click(function(){
      $("#kotak1").show();
    });
  
    // Fade
    $("#fadeOutBtn").click(function(){
      $("#kotak2").fadeOut();
    });
  
    $("#fadeInBtn").click(function(){
      $("#kotak2").fadeIn();
    });
  
    // Slide
    $("#slideUpBtn").click(function(){
      $("#kotak3").slideUp();
    });
  
    $("#slideDownBtn").click(function(){
      $("#kotak3").slideDown();
    });
  
    // Animate
    $("#animateBtn").click(function(){
      $("#kotak4").animate({
        left: '+=150px',
        height: '150px',
        width: '250px',
        opacity: 0.5
      }, 1000);
    });
  
    // Stop
    $("#startAnim").click(function(){
      $("#kotak5").animate({left: '+=400px'}, 5000);
    });
  
    $("#stopAnim").click(function(){
      $("#kotak5").stop();
    });
  
    // Callback
    $("#callbackBtn").click(function(){
      $("#kotak6").hide(1000, function(){
        alert("Kotak 6 telah disembunyikan!");
      });
    });
  
    // Chaining
    $("#chainingBtn").click(function(){
      $("#kotak7")
        .css("background-color", "orange")
        .slideUp(500)
        .slideDown(500)
        .fadeTo("slow", 0.3)
        .fadeTo("slow", 1);
    });
  
  });
  