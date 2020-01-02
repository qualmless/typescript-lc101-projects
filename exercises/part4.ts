let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;


// The variables that are commented out will be moved into the Spacecraft class
class Spacecraft {
    spaceCraft: string = "Space Shuttle";
    speedMph: number = 17500;
    milesPerKilometer: number = 0.621;

    constructor(name:string,speedMph:number) {
        
    }

    function getDaysToLocation (kilometersAway:number):number {
        let milesAway:number =  kilometersAway * this.milesPerKilometer;
        let hours:number = milesAway / this.speedMph;
        let daysToLocation:number = hours / 24;
        return daysToLocation
    }
}

// let spaceShuttle = new Spacecraft('Determination',17500)
// console.log(`it'll take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToMars)} to get to mars`)



// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;

// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }

// Define your Spacecraft class here:



// Create an instance of the class here:


// Print two outputs - one for the trip to Mars and one for the trip to the moon.

