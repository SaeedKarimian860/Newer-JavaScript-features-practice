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
  email: "therock@gmail.com",
  password: "iTd0EsNtM@tT3R",
  firstName: "Dwayne",
  lastName: "Johnson",
  born: 1972,
  age: 52,
  bio: "Dwayne Johnson started his career in Professional Wrestling before he began acting.",
  city: "Hayward",
  state: "California",
};

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

//much more tedious way of extracting data
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

//using object destructuring
// const { email, firstName, lastName, bio, city } = user;

// const { born: birthYear } = user;

const { city, state, died = "N/A" } = user2;

//Param destructuring
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const movies = [
  {
    title: "Men in Black",
    score: 90,
    year: 1997,
  },
  {
    title: "A Clockwork Orange",
    score: 88,
    year: 1972,
  },
  {
    title: "Mean Machine",
    score: 80,
    year: 2001,
  },
  {
    title: "A Fistful of Dollars",
    score: 98,
    year: 1964,
  },
  {
    title: "Master of the Flying Guillotine",
    score: 78,
    year: 1976,
  },
];


// movies.filter((movie) => movie.score >= 90);
// movies.filter(({ score }) => score >= 90);

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// })

//can make this slightly shorter using destructuring
movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`;
})