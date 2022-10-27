class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  const developer = new Person(1, 'Mario', 'Rossi', 25);
  // Stringify Method
  let json = JSON.stringify(developer);
  console.log(typeof json);
  console.log(json);

  const newPerson = JSON.parse(json);
  // Print developer as json object