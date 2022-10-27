const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

//In questo modo copio l'oggetto
const person2 = Object.assign ({}, person1);
// e qui andiamo a modificare la proprietà "Firstname" presente nel nostro primo oggetto
person2.firstName = 'Simon';
// Modifica la proprietà "firstName" di person2 in "Simon"*/




 /*            ------ Soluzione Alternativa -------

Posso utilizzare l'operatore di diffusione 
(essenzialmente quello che fa è che prende tutte le proprietà e li mette dentro le parentesi graffe)
dandoci la possibilità di "espandere" i nostri elementi 

 const person2 = { ...person1, firstName: 'Simon'};   */



console.log(person1);
console.log(person2);