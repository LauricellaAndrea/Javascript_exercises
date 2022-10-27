const person = {
  get FName(){
    return this.firstName
  },

  set firstName (Name){ 
  this._firstName = Name;   //in set non va il return
  },

  get lastName(){
    return this.lastName
  },

  set lastName (Surname){
   this._lastName = Surname;
  },

  fullName(){
    return `${this._firstName} ${this._lastName}`
  }
}

const john = Object.create(person)
john.firstName = "John";
john.lastName = "Doe";

const simon = Object.create(person)
simon.firstName = "Simon";
simon.lastName = "Collins";


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins