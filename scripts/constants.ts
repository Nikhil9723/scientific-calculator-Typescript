const enum BUTTON_TYPES  {
    EQUAL= "=",                         // To evalute the string (result)
    FUNCTION_EXPONENTIAL= 'F-E',        // To calculate the functional exponent F-E
    DEG= "DEG",                         // To calculate result in deg and toogle the button of deg
    RAD= "RAD",                         // To calculate output in RAD
    CLEAR_SCREEN= "C",                  // Clear the screen
    BACKSPACE= "backspace",             // remove the last character
    MULTIPLICATION= "*",                // function for multiplication
    DIVIDE= "/",                        // function for division of two number
    FACTORIAL= "factorial",             // function for factorial
    SQUARE= "square",                   // function for square
    SECOND_FUNCTIONALITY= "2nd",        // function for second functionality of calculator
    POWER_OF_10= "powerof10",           // function to calcualte the power of 10
    INVERSE= "1/",                      // function for inverse the number
    ABSOLUTE_VALUE= "absolute-value",   // function for absolute value
    EXPONENET= "exp",                   // function for exponent
    POWER= "power",                     // function for calculate power
    SQUARE_ROOT= "squareRoot",          // function for squareRoot of number
    LOG= "log",                         // function for calculate log of the number
    LN= "ln",                           // function for ln of number
    E= "e",                             // function for calculate the exponent of value
    PLUSH_MINUS= "+/-",                 // function for to toogle sign of number form + to - and - to +
    SINEX= "sin",                       // function for calculate the trignometry function sin
    COSEX= "cos",                       // function for calculate the trignometry function cos
    TANEX= "tan",                       // function for calculate the trignometry function tan
    FLOOR= "floor",                     // function for calculate the floor of number
    CEIL= "ceil",                       // function for calculate the ceil of number
    MEMORY_PLUSH= "M+",                 // function for to add the value to the memory variable
    MEMORY_MINUS= "M-",                 // function for divison of number
    MEMORY_SAVE= "MS",                  // function for to save the number into memory
    MEMORY_READ= "MR",                  // function for to read the number form mrmory
    MEMORY_CLEAR= "MC",                 // function for to clear the memory inputs
    };


 const enum ELEMENT_IDS {
    SQUARE= "square",                   // id to get the button for square of the number
    SQUARE_ROOT= "squareRoot",          // id for square root of the number
    DEG_BTN= "deg-btn",                 // id to get deg button to toogle between the deg and rad button
};


export  {BUTTON_TYPES, ELEMENT_IDS}