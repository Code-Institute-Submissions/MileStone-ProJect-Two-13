$(document).ready(function(){
  $("p1").mouseenter(function(){
    $("p1").css("background-color", "green");
  });
  $("p1").mouseleave(function(){
    $("p1").css("background-color", "brown");
  });
});

$(document).ready(function(){
  $(".close").click(function(){
    $("#myAlert").alert("close");
  });
});