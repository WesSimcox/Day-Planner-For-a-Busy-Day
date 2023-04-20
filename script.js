// Day.js

// displays the current date in header.
var presentDay = $("#currentDay");
presentDay.text (dayjs().format('dddd, MMM D YYYY'));

// Gets time of day (only the hour).
var presentHour = dayjs().hour();

// Formats the text areas based on the current time of the day.
$(".time-block").each(function(){
var sectionHour = $(this).attr("id").split("-")[1];
var textEntry = localStorage.getItem(sectionHour);
var textArea = $(this).find(".description");
textArea.val (textEntry);
  
if (sectionHour < presentHour) {
  $(this).find(".description").addClass("past");
}else if(sectionHour == presentHour){
   $(this).find(".description").addClass("present");
}else{
   $(this).find(".description").addClass("future");
}
});

// Save the entered information to the local storage.
$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr("id").split("-")[1];
var value = $(this).parent().find(".descrption").val();   
localStorage.setItem(key, value);
});