function Continue() {
  // display content of first part of form
  let header = document.getElementById("Header");
  let start = document.getElementById("Start");
  let step1 = document.getElementById("Step1");
  let step2 = document.getElementById("Step2");
  let step3 = document.getElementById("Step3");
  let footer = document.getElementById("stage");

  if (header.className === "inactive") {
    header.classList.add("active");
    header.classList.remove("inactive");
  } else {
  }

  if (start.className === "Center active") {
    start.classList.add("inactive");
    step1.classList.add("active");
    step1.classList.remove("inactive");
    footer.style.width = "33%";
  } else if (step1.className === "Center active") {
    step1.classList.add("inactive");
    step2.classList.add("active");
    step2.classList.remove("inactive");
    footer.style.width = "66%";
  } else if (step2.className === "Center active") {
    step2.classList.add("inactive");
    step3.classList.add("active");
    step3.classList.remove("inactive");
    footer.style.width = "99%";
  }
  // clear previous saved data
  return;
}

function Restart() {
  var els = document.querySelectorAll(".Center.active");
  let header = document.getElementById("Header");
  let start = document.getElementById("Start");
  let footer = document.getElementById("stage");

  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove("active");
    els[i].classList.add("inactive");
  }

  if (header.className === "active") {
    header.classList.add("inactive");
    header.classList.remove("active");
  }

  footer.style.width = "0";
  start.classList.add("active");
  start.classList.remove("inactive");
  return;
}

function CoffeeChoice(event) {
  let button1 = document.getElementById("continue");
  if (document.querySelector("#options div.selected") !== null) {
    document
      .querySelector("#options div.selected")
      .classList.remove("selected");
  }
  event.target.className = "Option selected";
  button1.style.backgroundColor = "#e05e33";
}

function CupChoice(event) {
  let button1 = document.getElementById("continue2");
  if (document.querySelector("#options div.cups.selected") !== null) {
    document
      .querySelector("#options div.cups.selected")
      .classList.remove("selected");
  }

  if (event.target.className !== "form-input") {
    event.target.className = "Option cups selected";
    button1.style.backgroundColor = "#e05e33";
  }
}
