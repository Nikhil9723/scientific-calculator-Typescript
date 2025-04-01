// Input from keyboard


import { 
    getInputString, 
    setInputString, 
    addDisplayStr, 
    addInputStr, 
    updateDisplay,
    calculateExpression,
    removeLastChar } from "../scripts/index";

document.addEventListener("keydown", keyPressHandler);

document.addEventListener("keydown", backSpaceHandler);

function backSpaceHandler(e: KeyboardEvent) {
  // let inputStr += inputStr;
  if(e.key === "Backspace") {
    removeLastChar();
  }

}


function keyPressHandler(e: KeyboardEvent) {
  let inputStr = getInputString();
  let allowedKey = new Set([
    "Enter",
    // "Backspace",
    "(",
    ")",
    "*",
    "x",
    "-",
    "+",
    "/",
    ".",
    "=",
  ]);

  let key = e.key;

  if((key >="0" && key <= "9") || allowedKey.has(key)) {
    
    if(key === "Enter" || key === "=") {
        // console.log("dqdcqcg");
      console.log(inputStr);
      let res = calculateExpression(inputStr);
      setInputString(res);
    //   updateDisplay()
    } else {
        addInputStr(key)
        addDisplayStr(key)
        updateDisplay()
    //   cal
    }
  }
}
