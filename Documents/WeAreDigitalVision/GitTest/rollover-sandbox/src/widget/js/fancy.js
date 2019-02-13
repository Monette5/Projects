$(function(){
  $(".fancy-button").mousedown(function(){
    $(".fancy-button").bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
        $(".fancy-button").removeClass('active');
    })
     $(".fancy-button").addClass("active");
  });
});
