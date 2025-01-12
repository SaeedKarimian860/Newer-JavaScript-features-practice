// function sum() {
//     return arguments.reduce((total, el) => total + el);
// } // this doesn't even work


//rest 
//(collect the rest of the values in this case)
// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// }


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal goes to: ${gold}`);
    console.log(`Silver Medal goes to: ${silver} `);
    console.log(`and thanks to everyone else: ${everyoneElse}`);
}