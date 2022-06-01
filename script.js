// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
  

var currentTime = moment().hour();
var avaliableTime = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var saveBtn = document.querySelectorAll(".saveBtn");
console.log(currentTime);

document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");
for (var i = 0; i < 9; i++) {
  if (currentTime === avaliableTime[i]) {
    console.log(i);
    document.getElementById(i).classList.add("present");
  }
  if (currentTime > avaliableTime[i]) {
    console.log(i);
    document.getElementById(i).classList.add("past");
  }
  if (currentTime < avaliableTime[i]) {
    console.log(i);
    document.getElementById(i).classList.add("future");
  }

  if(localStorage.getItem(i)){
      document.getElementById(i).value = localStorage.getItem(i);
  }

  saveBtn[i].addEventListener("click",function(){
    var id = this.getAttribute("data-id");
    var text = document.getElementById(id).value;

     localStorage.setItem(id,text);
    console.log(text);
})
}