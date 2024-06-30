//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
let message = lightBulbStatus === "Off"
    ? "Light Bulb is Off."
    : lightBulbStatus === "On"
    ? "Light Bulb is On."
    : lightBulbStatus === "Broken"
    ? "Light Bulb is Broken."
    : "Please choose the correct input (On/Off/Broken."
console.log(message)