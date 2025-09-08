"use strict";
function appear(value) {
  const display = document.querySelector(".display");
  display.value += value;
}

function result() {
  const display = document.querySelector(".display");
  try {
    const result = display.value;
    display.value = eval(result);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  const display = document.querySelector(".display");
  display.value = "";
}

function deleteLast() {
  const display = document.querySelector(".display");
  display.value = display.value.slice(0, -1);
}


