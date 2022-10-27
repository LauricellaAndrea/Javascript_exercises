const person1 = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
    address: {
      state: 'Italy',
      city: 'Rome',
      street: 'Via Romano, 12'
    }
  };
  
//JSON va a creare un’istanza stringa di un nuovo oggetto, di conseguenza la clonazione 
//va a creare due istanze TOTALMENTE DIVERSE e INDIPENDENTI degli oggetti in questione.
const person2 = JSON.parse(JSON.stringify(person1)) 
//
person2.address.city = 'Milano'
  

  //person2.address.city = 'Milan';
  
  console.log(person1);
  console.log(person2);