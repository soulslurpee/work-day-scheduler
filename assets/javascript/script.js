$(document).ready(function() {

  $("#currentDay").text(moment().format('DD MMMM YYYY, HH:MM:SS'));

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

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