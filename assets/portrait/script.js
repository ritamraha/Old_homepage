(function() {
  $(document).ready(function() {
    $("img").delay(3500).fadeIn(1000);
    $("#outline").css("stroke-dasharray", $("#outline")[0].getTotalLength());
    $("#outline").css("stroke-dashoffset", $("#outline")[0].getTotalLength());
    $("#outline").animate({
      strokeDashoffset: 0
    }, 9000);
    $("#face").css("stroke-dasharray", $("#face")[0].getTotalLength());
    $("#face").css("stroke-dashoffset", $("#face")[0].getTotalLength());
    $("#face").animate({
      strokeDashoffset: 0
    }, 9000);
    $("#body").css("stroke-dasharray", $("#body")[0].getTotalLength());
    $("#body").css("stroke-dashoffset", $("#body")[0].getTotalLength());
    return $("#body").animate({
      strokeDashoffset: 0
    }, 5000);
  });

}).call(this);

