import darkMode from "./darkMode";

function init() {
  const inputPx = document.getElementById("pixel");
  const inputRem = document.getElementById("rem");

  function calcPixel() {
    const px = inputPx.value;
    const output = +px / 16;

    inputRem.value = output;
  }

  function calcRem() {
    const rem = inputRem.value;
    const output = +rem * 16;
    inputPx.value = output;
  }

  // Start dark mode functionality
  darkMode();

  inputPx.addEventListener("input", calcPixel);
  inputRem.addEventListener("input", calcRem);
}

document.addEventListener("DOMContentLoaded", init);
