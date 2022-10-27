const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

/*const id = person.id;
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;*/


const personDestruct = [];
let {id = 1, firstName = 'Mario',  lastName= 'Rossi', age = 25} = personDestruct

console.log(id, firstName, lastName, age);