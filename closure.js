function bankAccount(initialBalance){
    var balance = initialBalance;
    return function(){
        return balance;
    }
}

var account = bankAccount(1000000);
console.dir(account)