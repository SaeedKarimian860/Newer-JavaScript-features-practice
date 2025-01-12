const nums = [32, 2, 15, 78, 1, 89, 53209];

// Math.max(nums); // this will print NaN

//using spread
Math.max(...nums); // 53209

Math.min(...nums); // 1

//spread in array literals
const cats = ['Big O', 'Leo', 'Gus'];
const dogs = ['Jasmina', 'Gemma', 'Mojo'];

const allPets = [...cats, ...dogs];

//spread in object literals
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };


const dataFromForm = {
    email: 'theguy@gmail.com',
    password: 'BigMan123!',
    username: 'nothim'
}
const newUser = { ...dataFromForm, id: 2453, isAdmin: false };
