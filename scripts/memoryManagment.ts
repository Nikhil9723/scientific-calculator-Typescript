// memory operations 
import {
    setInputString,
    getInputString,
    addInputStr,
    setDisplayStr,
    addDisplayStr,
    updateDisplay,
    getDisplayStr
} from "../scripts/index"

let memory: number =+ localStorage.getItem('memoryValue')!||0;

 
export function updatememorybutton(){
    
    let hasMemory=memory===0?false:true;
    let memoryClearBtn = document.querySelector('#col-mc-style')! as HTMLButtonElement;
    let memoryReadBtn = document.querySelector('#col-mr-style')! as HTMLButtonElement;
    memoryClearBtn.disabled=!hasMemory;
    memoryReadBtn.disabled=!hasMemory;
}

// memory addition M+
export function memoryPlus() {
    let inputStr = getInputString();
    memory+=eval(inputStr);
    localStorage.setItem('memoryValue',memory.toString());
    updatememorybutton();
    console.log(memory);
}

// memory subtraction 
export function memorySubtraction() {
    let inputStr = getInputString();
    memory -= eval(inputStr);
    localStorage.setItem('memoryValue', memory.toString());
    updatememorybutton();
    console.log(memory);
}

// memory Read

export function memoryRead() {
   
    let displayStr:string = getDisplayStr();
    displayStr = memory.toString();
    setDisplayStr(displayStr)
    let inputStr: string = getInputString();
    inputStr = memory.toString()
    setInputString(inputStr)
    console.log(memory);
    
     setDisplayStr(displayStr);
    // addDisplayStr(memory)
    updateDisplay()
    
}

//memory clear
export function memoryClear() {
    memory=0;
    localStorage.removeItem('memoryValue');
    updatememorybutton();
}
 
// save display value to memory
export function memorySave() {
    let inputStr = getInputString();
    memory=eval(inputStr);
    localStorage.setItem('memoryValue',memory.toString());
    updatememorybutton();
    console.log(memory);
}
