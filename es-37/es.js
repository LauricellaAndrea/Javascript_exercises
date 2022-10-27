class BankAccount{
    constructor(amount){
        this.amount = amount;
    }

    deposit(dep){
        this.amount = this.amount + dep;
    }

    withdraw(wit){
        this.amount = this.amount - wit;
    }

    view(){
        console.log(this.amount);
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();