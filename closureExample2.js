var num1 = 3;

var sum = function() {
    var num2 = 5;
    return function(){
        return num1+num2;
    }
}

var myFunc = sum();
console.dir(myFunc);