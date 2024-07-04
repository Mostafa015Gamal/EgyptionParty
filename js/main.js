/// <reference types="./@types/jquery"/>

let textArea = document.getElementById("textArea");
let numberLimit = document.getElementById("numberLimit");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let time = document.getElementById("time");
let start = document.getElementById("start");
let end = document.getElementById("end");

// menu
$("#btnOpenBar").on("click", function () {
  $(".homeOverlay").animate({ left: "250px" }, 500);
  $(".headerMargin").animate({ marginLeft: "250px" }, 500);
});

$("#btnCloseBar").on("click", function () {
  $(".homeOverlay").animate({ left: "0px" }, 500);
  $(".headerMargin").animate({ marginLeft: "0px" }, 500);
});

// scrollMenu
$(".homeOverlay a").on("click", function () {
  let aHref = $(this).attr("href");
  let sectionOffset = $(aHref).offset().top;
  $("html").animate({ scrollTop: sectionOffset }, 1000);
});

// accordion
// $(".clickHead").on("click", function () {
//   $(".bodyBox").not($(this).next()).slideUp(500);
//   $(this).next().slideToggle(500);
// });
let activeSinger = $("#duration .container:first-child .bodyActive")[0];
$(".clickHead").on("click", function () {
  if (activeSinger == this) {
    $(this).siblings().slideToggle();
    activeSinger = this;
  } else {
    activeSinger = this;
    $(".bodyBox").slideUp();
    $(this).siblings().slideToggle();
  }
});
// timeParty
setInterval(function () {
  let dateParty = new Date("2024-08-05").getTime() / 1000;
  let startParty = new Date("2024-08-06").getTime() / 1000;
  let today = new Date().getTime() / 1000;
  let timeDifference = dateParty - today;
  let timeDifferenceStartParty = startParty - today;
  let day = Math.floor(timeDifference / (24 * 60 * 60));
  let hour = Math.floor((timeDifference - day * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - day * (24 * 60 * 60) - hour * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - day * (24 * 60 * 60) - hour * 3600 - mins * 60
  );
  document.getElementById(
    "days"
  ).innerHTML = `<h3 class="m-0 pe-2">${day}</h3> <p class="fs-3 m-0">d</p>`;
  document.getElementById(
    "hours"
  ).innerHTML = `<h3 class="m-0 pe-2">${hour}</h3> <p class="fs-3 m-0">h</p>`;
  document.getElementById(
    "minutes"
  ).innerHTML = `<h3 class="m-0 pe-2">${mins}</h3> <p class="fs-3 m-0">m</p>`;
  document.getElementById(
    "seconds"
  ).innerHTML = `<h3 class="m-0 pe-2">${secs}</h3> <p class="fs-3 m-0">s</p>`;

  if (timeDifference != Math.abs(timeDifference)) {
    if (timeDifferenceStartParty != Math.abs(timeDifferenceStartParty)) {
      end.classList.remove("d-none");
      start.classList.add("d-none");
      time.classList.add("d-none");
    } else {
      end.classList.add("d-none");
      start.classList.remove("d-none");
      time.classList.add("d-none");
    }
  }
}, 1000);

// textArea character limit

$(textArea).on("keydown", function (e) {
  let number = 100 - $(this).val().length;
  if (number <= 0) {
    if (e.key != "Backspace") {
      e.preventDefault();
    } else {
      return true;
    }
  }
});

$(textArea).on("input", function () {
  let number = 100 - $(this).val().length;
  console.log(number);
  box = `<span class="text-danger fs-5">${number} </span> Characyer Reamining`;
  document.getElementById("numberLimit").innerHTML = box;
  if (number <= 0) {
    box = `<span class="text-danger fs-5">your available character finished </span> Characyer Reamining`;
    document.getElementById("numberLimit").innerHTML = box;
  }
});
