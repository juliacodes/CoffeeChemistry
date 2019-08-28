function Continue() {
  // display content of first part of form
  let start = document.getElementById("Start");
  let step1 = document.getElementById("Step1");
  let step2 = document.getElementById("Step2");
  let step3 = document.getElementById("Step3");

  if (start.className === "Center active") {
    start.classList.add("inactive");
    step1.classList.add("active");
    step1.classList.remove("inactive");
  } else if (step1.className === "Center active") {
    step1.classList.add("inactive");
    step2.classList.add("active");
    step2.classList.remove("inactive");
  } else if (step2.className === "Center active") {
    step2.classList.add("inactive");
    step3.classList.add("active");
    step3.classList.remove("inactive");
  }
  // clear previous saved data
  return;
}

function PostSelected() {}
