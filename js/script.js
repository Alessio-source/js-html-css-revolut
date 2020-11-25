$(document).ready(
  function(){
    $(".right > .list-inline > li:nth-child(2) > a").mouseenter(
      function(){
        $(".box.active").removeClass("active");
        $(".box:nth-child(1)").addClass("active");
      }
    );

    $(".right > .list-inline > li:nth-child(3) > a").mouseenter(
      function(){
        $(".box.active").removeClass("active");
        $(".box:nth-child(2)").addClass("active");
      }
    );

    $(".right > .list-inline > li:nth-child(4) > a").mouseenter(
      function(){
        $(".box.active").removeClass("active");
        $(".box:nth-child(3)").addClass("active");
      }
    );
  }
);
