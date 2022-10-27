class BankAccount {
    #amount = 0;
  
    constructor(initialAmount) {
      this.#amount = initialAmount;
    }
  
    deposit(amount) {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }
      else{
        this.#amount += amount;
      }
  
    }
  
    withdraw(amount) {
      if (amount < 0) {
        try {
        throw new Error('The amount provided cannot be negative');
      }
  
      catch (error){
        console.log("name", error.name);
        console.log("message", error.message);
       }
      }

      else if (this.#amount < amount){
        try {
          throw new Error('You cannot withdraw more than account balance')
      } 
      
      catch (error){
        console.log("name", error.name);
        console.log("message", error.message);
      }
    }
     else[
      this.#amount -= amount

     ]  
      
    }
  
    view() {
      console.log(this.#amount);
    }
  }
  
  // Handle errors to avoid app crash
  const bankAccount = new BankAccount(1000);
  try {
  bankAccount.deposit(500);

  } catch (error) {
    console.log("name", error.name);
    console.log("message", error.message);
  }
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();