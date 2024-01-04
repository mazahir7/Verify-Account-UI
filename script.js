"use strict";

const codes = document.querySelectorAll(".code");
const codeLength = codes.length;

codes[0].focus();

codes.forEach((code, idx) => {

  code.addEventListener("keydown", function (e) {

    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => {
        idx < codeLength - 1 && codes[idx + 1].focus();
      }, 10);

      if (idx === (codeLength - 1)) {
        console.log("s");
        setTimeout(() => {
          alert("Your Account is now verified!");
        }, 10);
      }
    }
    else if (e.key === "Backspace") {
      setTimeout(() => {
        idx > 0 && codes[idx - 1].focus();
      }, 10);
    }

  });
});