//destructuring arrays
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

//could pull individual scores out by index
const highScore = scores[0];
const secondHighScore = scores[1];

//a better way using destructuring
const [gold, silver, bronze, ...everyoneElse] = scores;
//order/position matters!


//destructuring objects
const user = {
    email: 'therock@gmail.com',
    password: 'iTd0EsNtM@tT3R',
    firstName: 'Dwayne',
    lastName: 'Johnson',
    born: 1972,
    age: 52,
    bio: 'Dwayne Johnson started his career in Professional Wrestling before he began acting.',
    city: 'Hayward',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}




//much more tedious way of extracting data
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

//using object destructuring
// const { email, firstName, lastName, bio, city } = user;

// const { born: birthYear } = user;

const { city, state, died = 'N/A' } = user2;