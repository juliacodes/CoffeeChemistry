function Continue() {
  // sets current stage for application
  let header = document.getElementById("Header");
  let start = document.getElementById("Start");
  let step1 = document.getElementById("Step1");
  let step2 = document.getElementById("Step2");
  let step3 = document.getElementById("Step3");
  let step4 = document.getElementById("Step4");
  let footer = document.getElementById("stage");
  let emptySelection = document.getElementById("empty-selection-type");

  if (header.className === "inactive") {
    // active header
    header.classList.add("active");
    header.classList.remove("inactive");
  }

  if (start.className === "Center active") {
    // landing page
    start.classList.add("inactive");
    step1.classList.add("active");
    step1.classList.remove("inactive");
    footer.style.width = "33%";
  } else if (step1.className === "Center active") {
    // coffee type choice page
    if (document.querySelector("#options div.selected") == null) {
      emptySelection.innerHTML = "Please select an option";
    } else {
      let CoffeeTypeClass = document.querySelector("#options div.selected");
      let CoffeeTypeInput = CoffeeTypeClass.id;

      step1.classList.add("inactive");
      step2.classList.add("active");
      step2.classList.remove("inactive");
      footer.style.width = "66%";
      localStorage.setItem("CoffeeTypeInput", CoffeeTypeInput);
    }
  } else if (step2.className === "Center active") {
    // coffee amount choice page
    if (
      document.querySelector("#options div.cups.selected") == null &&
      document.querySelector("input").value == ""
    ) {
      emptySelection.innerHTML = "Please select an option";
    } else if (document.querySelector("input").value !== "") {
      step2.classList.add("inactive");
      step3.classList.add("active");
      step3.classList.remove("inactive");
      footer.style.width = "99%";
      localStorage.setItem("CoffeeAmountInput", input.value);
    } else {
      let CoffeeAmountClass = document.querySelector(
        "#options div.cups.selected"
      );
      let CoffeeAmountInput = CoffeeAmountClass.id;

      step2.classList.add("inactive");
      step3.classList.add("active");
      step3.classList.remove("inactive");
      footer.style.width = "99%";
      localStorage.setItem("CoffeeAmountInput", CoffeeAmountInput);
    }
  } else if (step3.className === "Center active") {
    // coffee strength page
    let strength = 17;
    let grindType = "Medium";
    let CoffeeType = localStorage.getItem("CoffeeTypeInput");

    step3.classList.add("inactive");
    step4.classList.add("active");
    step4.classList.remove("inactive");
    footer.style.backgroundColor = "white";
    footer.style.width = "100%";

    // setting coffee strength level
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

    // setting coffee type
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

    // sets displayed water amount
    let waterCount = localStorage.getItem("CoffeeAmountInput") * 250;

    // sets displayed coffee amount
    let coffeeCount = Math.round(waterCount / strength);

    document.getElementById("water-count").innerHTML = waterCount + "g";
    document.getElementById("grind-level").innerHTML = grindType;
    document.getElementById("coffee-count").innerHTML = coffeeCount + "g";
  }
  return;
}

function Restart() {
  // Restart function runs when clicking "brew again" or the logo at the top
  var els = document.querySelectorAll(".Center.active");
  let header = document.getElementById("Header");
  let start = document.getElementById("Start");
  let footer = document.getElementById("stage");

  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove("active");
    els[i].classList.add("inactive");
  }

  // removes the header when on the starter page
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
  // selects the coffee that the user clicks on
  let button1 = document.getElementById("continue");
  if (document.querySelector("#options div.selected") !== null) {
    document
      .querySelector("#options div.selected")
      .classList.remove("selected");
  }
  event.target.className = "Option selected";
  button1.style.backgroundColor = "#cb481c";
}

function CupChoice(event) {
  // selects the amount of cups that the user clicks
  let button1 = document.getElementById("continue2");

  if (document.querySelector("#options div.cups.selected") !== null) {
    document
      .querySelector("#options div.cups.selected")
      .classList.remove("selected");
  }

  if (event.target.className !== "form-input") {
    event.target.className = "Option cups selected";
    button1.style.backgroundColor = "#cb481c";
    document.querySelector("input").value = "";
  }
}

function WaterUnit(id) {
  // handles the water unit change
  let currentlySelected = document.querySelector(".button-selected-water");
  let newSelected = document.getElementById(id);

  // runs if the selected unit is not the previously selected one
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
  // handles the coffee unit change
  let currentlySelected = document.querySelector(".button-selected-coffee");
  let newSelected = document.getElementById(id);

  let waterCount = localStorage.getItem("CoffeeAmountInput") * 250;
  let strength = localStorage.getItem("CoffeeStrength");
  let coffeeCount = Math.round(waterCount / strength);

  // runs if the selected unit is not the previously selected one
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
  // handles the grind unit change
  let currentlySelected = document.querySelector(".button-selected-grind");
  let newSelected = document.getElementById(id);
  let grindUnit = localStorage.getItem("grindType");
  let newGrindUnit = 0;

  // determines the displayed grind unit based on the descriptor
  if (grindUnit === "coarse") {
    newGrindUnit = "1 - 2";
  } else if (grindUnit === "fine") {
    newGrindUnit = "9 - 10";
  } else if (grindUnit === "medium-coarse") {
    newGrindUnit = "6 - 7";
  } else if (grindUnit === "medium") {
    newGrindUnit = "4 - 5";
  }

  // runs if the selected unit is not the previously selected one
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
