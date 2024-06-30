//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
let message ;
switch(lightBulbStatus){
    case "On":
        message = "Light Bulb is On."
        break
    case "Off":
        message = "Light Bulb is Off."
        break
    case "Broken"    :
        message = "Light Bulb is Broken."
        break
    default:
        message = "Please choose the correct input (On/Off/Broken)."
        break    
}  
console.log(message)