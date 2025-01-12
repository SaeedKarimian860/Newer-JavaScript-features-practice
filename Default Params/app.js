//the old way
// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

//the new way
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}