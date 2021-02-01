var a= 20;

async function count(){
    var myFunc = function timer(){
        console.log(a);
    }
    setTimeout(myFunc,3000);
    console.dir(myFunc)
}
count();

