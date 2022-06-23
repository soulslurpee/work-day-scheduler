$(document).ready(function() {

  $("#currentDay").text(moment().format('DD MMMM YYYY, HH:MM:SS'));

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  $("#9h .description").val(localStorage.getItem("9h"));
  $("#10h .description").val(localStorage.getItem("10h"));
  $("#11h .description").val(localStorage.getItem("11h"));
  $("#12h .description").val(localStorage.getItem("12h"));
  $("#13h .description").val(localStorage.getItem("13h"));
  $("#14h .description").val(localStorage.getItem("14h"));
  $("#15h .description").val(localStorage.getItem("15h"));
  $("#16h .description").val(localStorage.getItem("16h"));
  $("#17h .description").val(localStorage.getItem("17h"));

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