function adultFilter(persons) {
   return persons.filter( (persons) => persons.age >= 18)


            //Alternativa
   /*
   
   const adulstName = persons.filter(person => person.age >= 18);
   return adulstName;
   
   
   //il parametro dopo filter NON può essere PERSONS perchè si tratta di una costante 
   
   */
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons); // mi permette di consologgare
//console.log(persons);
console.log(adults);