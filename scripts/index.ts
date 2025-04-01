import {
  addToHistory,
} from "../scripts/history"

import {
  memoryPlus,
  memorySubtraction,
  memoryClear, 
  memorySave,
  memoryRead
} from "../scripts/memoryManagment"


let inputStr:string = "";
let displayStr:string = "";
//calculator input field
const calcInput = document.getElementById("display")! as HTMLDivElement;
const displayValue = document.getElementById("calculator-input") as HTMLDListElement;
const degTorad = document.getElementById('deg-btn') as HTMLButtonElement;



//get elemet for square and squareRoot
const square = document.getElementById("square") as HTMLButtonElement;
const squareRoot = document.getElementById("squareRoot") as HTMLButtonElement;



let isExponential: boolean = false; // Track the scientific notation

// Toogle DEG button to Radian and vice versa.
let isRad: boolean = true;

export function setInputString(str: string) {
  inputStr = str;
}

export function getInputString() :string {
  return inputStr;
}

export function setDisplayStr(str: string) {
  console.log(str);
  
  displayStr = str;
}

export function getDisplayStr() :string {
  return displayStr;
}

export function addDisplayStr(str: string) {
  displayStr = displayStr + str;
}

export function addInputStr(str: string) {
  inputStr = inputStr + str;
}

export function updateDisplay() {
  // console.log(displayStr, "update");
  
  calcInput.textContent = displayStr || '0';
}



// get input from inbuild keybord
  displayValue.addEventListener("click", (e: Event)=> {

  let target = e.target;
  // let currentKey: string;
  
  if(target instanceof HTMLElement) {
    let currentKey = target.closest("button")!.value;
    console.log(currentKey);
    
    // console.log(currentKey);

    if(!currentKey) {
      return
    }
    switch(currentKey) {
      
      case "=":
    
        if(!inputStr) {
          calcInput.textContent = '0';
        }
        else {
          let res:string = calculateExpression(inputStr);
          inputStr = res;
          console.log(res); 
        }
      
        break;

      case "F-E":
        toggleExponential()
        break;

      case "DEG":
        degToRad()
        currentKey = "RAD"
        break;

      case "RAD":
        degToRad()
        currentKey = "DEG"
        break
      case "C":
      clearScreen();
      break;

      case "backspace":
        removeLastChar();
        break;

      case "*":
        calcMultiplication();
        break;

      case "factorial":
        if(!inputStr) {
          return;
        }
        else {
          displayStr += "!"
        calcInput.textContent = displayStr;
        console.log(inputStr, "hiiii");
        inputStr = inputStr.toString()
    
        let num:number = Number(inputStr);
        let result:number = calcfactorial(num);

        inputStr = inputStr.slice(0, -1);
        inputStr += result;
        console.log(result);
        calcInput.scrollTo(calcInput.offsetWidth, 0);
        }
        
        break;
      
      case "square":
        calcSquare();
        break;

      case "2nd":
        secondFunctionality()
        break;

      case "powerof10":
        displayStr += "10^"
        calcInput.textContent = displayStr;
        inputStr += "10 **"
        break;
        
      case "1/":
        calcInverse();
        break;

        case "absolute-value":
          calcAbsolute();
          break;

        case "exp":
          exponents();
          break;

        case "power":
        calcPower();
        break;

        case "squareRoot":
          calcSquareRoot()
          break;

        case "log":
          calcLogaritham();
          break;

        case "ln":
          calcLn()
          break;

        case "e":
          calcExponent()
          break;

        case "+/-":
          toogleSign()
          break;

      //Trignometry function
        
      case "sin":
        sinex();
        break;

      case "cos":
        cosex();
        break;

      case "tan":
        tanx();
        break;

      //Advance function

      case "floor":
        floor();
        break;

      case "ceil":
        ceil();
        break;

      case 'M+':{
        memoryPlus()
        break;
      }

      case "M-": {
        memorySubtraction();
        break;
      }

      case "MS": {
        memorySave()
        break;
      }

      case "MR":
        memoryRead();
        
        break;

      case "MC":
        memoryClear()
        break;

      default: 
        inputStr += currentKey;
        displayStr += currentKey;
        calcInput.textContent = displayStr;
        calcInput.scrollTo(calcInput.offsetWidth, 0);      
        break;

    }
    }

})




// calculate Final output

export function calculateExpression(inputStr: string) :string{   
      try {
        let result: string;
        let newstr: string = inputStr.replace('^','**');
        newstr = inputStr.replace("x", "*")
        //replace string for absolute value
        let regexmodulus: RegExp = /\|(.+)\|/g;
        newstr=newstr.replace(regexmodulus,(match,num)=>{
          console.log(num);             
          let cal=eval(num);
               if(cal<0){
               cal=-cal;
              }
         // console.log(cal);
                                            
          return cal;
     });

        console.log(newstr);
        
        result = eval(newstr);

        addToHistory(`${newstr} = ${result}`);
        inputStr = result;
        displayStr = result;
        updateDisplay()
        
        return result;
        
      }
      catch(error) {
        // calcInput.textContent = "Error"
        alert("Invalid Expression !")
        // displayStr = "0";
        calcInput.textContent = "0"
        displayStr = ""
        let newstr:string = ""
        return newstr;
      }
   
}


// calculate Multiplication 
function calcMultiplication() {
  displayStr += "x";
  inputStr += "*"
  calcInput.textContent += "x"
}

//calculate square of number
function calcSquare() {
  if(!is2nd) {
    displayStr += "^3";
    inputStr += "**3"
  }
  else {
    displayStr += "^2";
    inputStr += "**2"
  }
  calcInput.textContent = displayStr;
  // calcInput.scrollTo(calcInput.offsetWidth, 0);
}

//calculate inverse of number
function calcInverse() {
  if(inputStr != "0") {
    inputStr = "1/";
    displayStr = "1/"
    calcInput.textContent = displayStr;
    calcInput.scrollTo(calcInput.offsetWidth, 0);
  }
}

//calculate power of number
function calcPower() {
  displayStr += "^";
  calcInput.textContent = displayStr;
  inputStr += "^"
  calcInput.scrollTo(calcInput.offsetWidth, 0);
}

//calculate square root of number
function calcSquareRoot() {
  if(!is2nd) {
    displayStr += "√("
    inputStr += "Math.cbrt("
  } else {
     displayStr += "√("
     inputStr += "Math.sqrt("
  }
  calcInput.textContent = displayStr;
  calcInput.scrollTo(calcInput.offsetWidth, 0);
}

//calclate logaritham
function calcLogaritham() {
  displayStr += "log("
  inputStr += "Math.log10("
  calcInput.textContent = displayStr;
}

//calculate Ln for number
function calcLn() {
  displayStr += "ln(";
  inputStr += "Math.log(";
  calcInput.textContent = displayStr;
}

//calclate exponenet of number 
function calcExponent() {
  displayStr += "e";
    if(!inputStr) {
    inputStr += "Math.E";
    } else {
      inputStr+= "*Math.E";
    }
  calcInput.textContent = displayStr
}

//toogle sign for output or input between + or -
function toogleSign() {
  let strMatch: RegExpMatchArray= inputStr.match(/(-?\d+(\.\d+)?)$/)!;
  if(strMatch) {
   console.log("matched !");
   let num: number = Number(strMatch[1]);
   let toggle: number = num * -1;
   inputStr = inputStr.replace(/(-?\d+(\.\d+)?)$/, `${toggle}`);
   displayStr = inputStr;
   calcInput.textContent = displayStr; 
  }
}

// deg to rad toogle function
function degToRad() {
  degTorad.textContent = isRad ? "RAD" : "DEG"
  isRad = !isRad;
}

// 2nd functionality
let is2nd = true;

function secondFunctionality() {
  square.innerHTML = is2nd ? `x<sup>3</sup>` : `x<sup>2</sup>`;
  squareRoot.innerHTML = is2nd ? `<sup>3</sup>&Sqrt;x`: `<sup>2</sup>&Sqrt;x`
  is2nd = !is2nd;
}



// Clear Screen 

function clearScreen() {
  calcInput.textContent = '0'
  inputStr = '';
  displayStr = ""
}

//remove last character

export function removeLastChar() {
  calcInput.textContent = calcInput.textContent!.slice(0, -1);
  inputStr = calcInput.textContent;
  displayStr = calcInput.textContent;

  if(!inputStr) {
    calcInput.textContent = "0"
  }
}
 

// calculate factorial

function calcfactorial(num: number) :number{
  
  if(num === 0) {
    return 1
  }

  return num * calcfactorial(num-1)
}


//calculate exponents

function exponents() {
  if(!inputStr) {
    displayStr += "10^"
    inputStr += "10 ** ";
    calcInput.textContent = displayStr;

  } else {
     displayStr += " x10^";
     inputStr += "*10 **";
     calcInput.textContent = displayStr;
  }
}

// calculate Absolute

function calcAbsolute() {
  displayStr += "|";
  inputStr += "|"
  calcInput.textContent = displayStr;
  
  // let newstr = inputStr;

}

// calculate Function exponention

function toggleExponential() {

  if (!inputStr || isNaN(Number(inputStr))) return;
 
  let num = Number(inputStr);
  isExponential = !isExponential;
 
  if (isExponential) {
    let exponent: string[] = num.toExponential().split("e");
    inputStr = `${exponent[0]}*10**${Number(exponent[1])}`;
    displayStr = `${exponent[0]}*10^${Number(exponent[1])}`;
    calcInput.textContent = displayStr
    isExponential = false;
  } else {
    inputStr = num.toString();
    displayStr = inputStr;
    calcInput.textContent = displayStr;
  }
 
}
 
 // calculate trignometry function
 function sinex() {
// Math.PI
  inputStr += !isRad ? "Math.sin(" : "Math.sin((Math.PI/180)*"
  displayStr += "sin(";
  // inputStr += "Math.sin("
  calcInput.textContent = displayStr;
 }
 
 function cosex() {
  inputStr += !isRad ? "Math.cos(" : "Math.cos((Math.PI/180)*"
  displayStr += "cos(";
  calcInput.textContent = displayStr;
 }

 function tanx() {
  inputStr += !isRad ? "Math.tan(" : "Math.tan((Math.PI/180)*"
  displayStr += "tan(";
  calcInput.textContent = displayStr;
 } 

//Advanced function

function floor() {
  inputStr += "Math.floor("
  displayStr += "floor("
  calcInput.textContent = displayStr;
}

function ceil() {
  inputStr += "Math.ceil("
  displayStr += "ceil("
  calcInput.textContent = displayStr;
}


// dropdown functionality
document
  .querySelector("#trigonometry-dropdown")!
  .addEventListener("click", trigonometryFunction);
 
document
  .querySelector("#functional-dropdown")!
  .addEventListener("click", functionDropdown);
 
function trigonometryFunction() {
  document.getElementById("trigonometryDropdown")!.classList.toggle("show");
}
 
function functionDropdown() {
  document.getElementById("functionDropdown")!.classList.toggle("showFn");
}
 
window.onclick = function (event) {
  let trigDropdown = document.getElementById("trigonometryDropdown") as HTMLDivElement;
  let funcDropdown = document.getElementById("functionDropdown") as HTMLDivElement;
 
  let target = event.target;
  if(target instanceof HTMLElement) {
    if (!target.closest(".dropbtn")) {
      if (trigDropdown.classList.contains("show")) {
        trigDropdown.classList.remove("show");
      }
    }

    if (!target.closest(".functionDropbtn")) {
      if (funcDropdown.classList.contains("showFn")) {
        funcDropdown.classList.remove("showFn");
      }
    }
   
  }


};



