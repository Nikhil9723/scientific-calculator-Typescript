// import {
//   calcInput
// } from "../scripts/index"

// Key for storing history in localStorage
const HISTORY_KEY = 'calculatorHistory';  

//get div for toogle the history
const openHistory = document.getElementById("history") as HTMLDivElement;

// Retrieve history from localStorage
let history: string[] = JSON.parse(localStorage.getItem(HISTORY_KEY)!) || [];

// is History for toogle history part
let isHistory: boolean = false;

let showHistory = document.getElementById("show-history") as HTMLButtonElement;

  showHistory.addEventListener("click", (e) => {
  console.log("Hii");
  isHistory = !isHistory;
    
  if(isHistory){
      openHistory.style.display = "inline-block";
      // calcInput.style.display = "none"
      // displayValue.style.display = "none"
  }
  else {
      openHistory.style.display = "none";
      // calcInput.style.display = "inline-block"
  }
   
})



// history manage

export function addToHistory(calculation: string) {
    // Add the calculation to history
    history.push(calculation);

    // Limit the history to the last 5 calculations
    if (history.length > 5) {
        history.shift();  // Remove the oldest item
    }

    // Save the updated history to localStorage
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

    // Update the history display
    updateHistoryDisplay();
  }
function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList') as HTMLUListElement ;
    historyList.innerHTML = '';

    // Display the last 5 calculations
    history.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
  }
  // Initialize the history display when the page loads
  window.onload = function() {
    updateHistoryDisplay();
  }
