$(document).ready(function() {

  $("#currentDay").text(moment().format('DD MMMM YYYY, HH:MM:SS'));


  var colorUpdate = function () {

    var currentHour = moment().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("h")[0]);
      console.log( blockHour, currentHour)

        if (blockHour < currentHour) {
          $(this).removeClass("present").removeClass("future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past").removeClass("future").addClass("present");
        } else {
          $(this).removeClass("past").removeClass("present").addClass("future");
        }
      })
  }
  colorUpdate();
});
  
  