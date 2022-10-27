class Person {
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    set firstName(value){
        this._firstName = value;

    }

    set lastName(value){
        this._lastName = value;
    }

    set age(value){
        this._age = value
    }

}

//aggiungere un underscore in get e set per evitare
// l'errore delle massime chiamate

  
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName());
  
  person.firstName = 'Maria';
  person.lastName = 'Verdi';
  console.log(person.fullName());