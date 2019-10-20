function Continue() {
  // display content of first part of form
  let header = document.getElementById("Header");
  let start = document.getElementById("Start");
  let step1 = document.getElementById("Step1");
  let step2 = document.getElementById("Step2");
  let step3 = document.getElementById("Step3");
  let step4 = document.getElementById("Step4");

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
    if (document.querySelector("#options div.selected") == null) {
      document.getElementById("emptySelection-type").innerHTML =
        "Please select an option";
    } else {
      step1.classList.add("inactive");
      step2.classList.add("active");
      step2.classList.remove("inactive");
      footer.style.width = "66%";

      let CoffeeTypeClass = document.querySelector("#options div.selected");
      let CoffeeTypeInput = CoffeeTypeClass.id;
      localStorage.setItem("CoffeeTypeInput", CoffeeTypeInput);
      console.log(localStorage.getItem("CoffeeTypeInput"));
    }
  } else if (step2.className === "Center active") {
    if (
      document.querySelector("#options div.cups.selected") == null &&
      document.querySelector("input").value == ""
    ) {
      document.getElementById("emptySelection-count").innerHTML =
        "Please select an option";
    } else if (document.querySelector("input").value !== "") {
      step2.classList.add("inactive");
      step3.classList.add("active");
      step3.classList.remove("inactive");
      footer.style.width = "99%";

      localStorage.setItem("CoffeeAmountInput", input.value);
      console.log(localStorage.getItem("CoffeeAmountInput"));
    } else {
      step2.classList.add("inactive");
      step3.classList.add("active");
      step3.classList.remove("inactive");
      footer.style.width = "99%";
      let CoffeeAmountClass = document.querySelector(
        "#options div.cups.selected"
      );
      let CoffeeAmountInput = CoffeeAmountClass.id;
      localStorage.setItem("CoffeeAmountInput", CoffeeAmountInput);
      console.log(localStorage.getItem("CoffeeAmountInput"));
    }
  } else if (step3.className === "Center active") {
    step3.classList.add("inactive");
    step4.classList.add("active");
    step4.classList.remove("inactive");
    footer.style.backgroundColor = "white";
    footer.style.width = "100%";

    let rangeSlider = document.getElementById("CoffeeStrength").value;
    let strength = 17;
    if (document.getElementById("CoffeeStrength").value == 1) {
      strength = 19;
      localStorage.setItem("CoffeeStrength", strength);
    } else if (document.getElementById("CoffeeStrength").value == 2) {
      strength = 18;
      localStorage.setItem("CoffeeStrength", strength);
    } else if (document.getElementById("CoffeeStrength").value == 3) {
      strength = 17;
      localStorage.setItem("CoffeeStrength", strength);
    } else if (document.getElementById("CoffeeStrength").value == 4) {
      strength = 16;
      localStorage.setItem("CoffeeStrength", strength);
    } else if (document.getElementById("CoffeeStrength").value == 5) {
      strength = 15;
      localStorage.setItem("CoffeeStrength", strength);
    }

    let grindType = "Medium";
    let CoffeeType = localStorage.getItem("CoffeeTypeInput");
    if (CoffeeType === "drip") {
      grindType = "Medium";
      localStorage.setItem("grindType", "medium");
    } else if (CoffeeType === "chemex") {
      grindType = "Medium-Coarse";
      localStorage.setItem("grindType", "medium-coarse");
    } else if (CoffeeType === "french") {
      grindType = "Coarse";
      localStorage.setItem("grindType", "coarse");
    } else if (CoffeeType === "espresso") {
      grindType = "Fine";
      localStorage.setItem("grindType", "fine");
    }

    let waterCount = localStorage.getItem("CoffeeAmountInput") * 250;
    let coffeeCount = Math.round(waterCount / strength);

    document.getElementById("water-count").innerHTML = waterCount + "g";
    document.getElementById("grind-level").innerHTML = grindType;
    document.getElementById("coffee-count").innerHTML = coffeeCount + "g";
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
    document.querySelector("input").value = "";
  }
}

function WaterUnit(id) {
  let currentlySelected = document.querySelector(".button-selected-water");
  let newSelected = document.getElementById(id);
  if (currentlySelected.id !== id) {
    currentlySelected.classList.remove("button-selected-water");
    if (id === "wat-oz") {
      newSelected.classList.add("button-selected-water");
      let waterUnit = Math.round(
        (localStorage.getItem("CoffeeAmountInput") * 250) / 28.35
      );
      document.getElementById("water-count").innerHTML = waterUnit + " oz";
    } else if (id == "wat-ml") {
      newSelected.classList.add("button-selected-water");
      let waterUnit = Math.round(
        localStorage.getItem("CoffeeAmountInput") * 250
      );
      document.getElementById("water-count").innerHTML = waterUnit + " ml";
    } else if (id == "wat-g") {
      newSelected.classList.add("button-selected-water");
      let waterUnit = Math.round(
        localStorage.getItem("CoffeeAmountInput") * 250
      );
      document.getElementById("water-count").innerHTML = waterUnit + "g";
    }
  }
}

function CoffeeUnit(id) {
  let currentlySelected = document.querySelector(".button-selected-coffee");
  let newSelected = document.getElementById(id);

  let waterCount = localStorage.getItem("CoffeeAmountInput") * 250;
  let strength = localStorage.getItem("CoffeeStrength");
  let coffeeCount = Math.round(waterCount / strength);

  if (currentlySelected.id !== id) {
    currentlySelected.classList.remove("button-selected-coffee");
    if (id === "cof-oz") {
      newSelected.classList.add("button-selected-coffee");
      let coffeeUnitNew = coffeeCount / 28.35;
      document.getElementById("coffee-count").innerHTML =
        coffeeUnitNew.toFixed(2) + " oz";
    } else if (id == "cof-tbs") {
      newSelected.classList.add("button-selected-coffee");
      let coffeeUnitNew = coffeeCount / 12.781700527271772;
      document.getElementById("coffee-count").innerHTML =
        coffeeUnitNew.toFixed(1) + " tbs";
    } else if (id == "cof-g") {
      newSelected.classList.add("button-selected-coffee");
      let coffeeUnitNew = Math.round(coffeeCount);
      document.getElementById("coffee-count").innerHTML = coffeeUnitNew + "g";
    }
  }
}

function GrindUnit(id) {
  let currentlySelected = document.querySelector(".button-selected-grind");
  let newSelected = document.getElementById(id);
  let grindUnit = localStorage.getItem("grindType");
  let newGrindUnit = 0;

  if (grindUnit === "coarse") {
    newGrindUnit = "1 - 2";
  } else if (grindUnit === "fine") {
    newGrindUnit = "9 - 10";
  } else if (grindUnit === "medium-coarse") {
    newGrindUnit = "6 - 7";
  } else if (grindUnit === "medium") {
    newGrindUnit = "4 - 5";
  }

  if (currentlySelected.id !== id) {
    currentlySelected.classList.remove("button-selected-grind");
    if (id === "num") {
      newSelected.classList.add("button-selected-grind");
      document.getElementById("grind-level").innerHTML = newGrindUnit;
    } else if (id == "des") {
      newSelected.classList.add("button-selected-grind");
      document.getElementById("grind-level").innerHTML = grindUnit;
    }
  }
}
