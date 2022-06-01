//setting variables//
var currentTime = moment().hour();
var avaliableTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveBtn = document.querySelectorAll(".saveBtn");
//schedule changes color depending on time of day//
document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");
for (var i = 0; i < 9; i++) {
    if (currentTime === avaliableTime[i]) {
        document.getElementById(i).classList.add("present");
    }
    if (currentTime > avaliableTime[i]) {
        document.getElementById(i).classList.add("past");
    }
    if (currentTime < avaliableTime[i]) {
        document.getElementById(i).classList.add("future");
    }
    if (localStorage.getItem(i)) {
        document.getElementById(i).value = localStorage.getItem(i);
    }
    //save button, data save//
    saveBtn[i].addEventListener("click", function () {
        var id = this.getAttribute("data-id");
        var text = document.getElementById(id).value;
        localStorage.setItem(id, text);
    })
}