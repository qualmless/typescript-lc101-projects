// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLocation (kilometersAway:number):number {
    let milesAway:number =  kilometersAway * milesPerKilometer;
    let hours:number = milesAway / speedMph;
    let daysToLocation:number = hours / 24;
    return daysToLocation
}
console.log(`it'll take ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to get to Mars`)
console.log(`it'll take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon`)

// In the space indicated, define a function that calculates the days it would take to travel.
// Function name getDaysToLocation
// Parameters
// kilometersAway must be a number.
// Returns the number of days to Mars.
// Use the same calculations as in Part 2.1.
// Inside the function, make the variable names generic. Use milesAway and hours instead of milesToMars and hoursToMars.
// The function should declare that it returns a number.



// Print out the days to Mars.
// Use a template literal, ${getDaysToLocation(kilometersToMars)} and ${spacecraftName}.
// Print out the days to the Moon.
// Use template literals, ${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}.
// Use the terminal in VSCode to compile your .ts file, then run the part3.js file.




// Call the function and print the outputs for the Mars trip and the moon trip:
