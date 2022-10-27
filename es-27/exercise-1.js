const person = {
  firstName: 'John',
  lastName: 'Doe',
  
address: {
  city: ''
},
fullName(){
  return `${this.firstname} ${this.lastname}` ;
},
};


console.log(person.address.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined