const promise1 = Promise.resolve("resolved promise one");

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("resolved promise two")
    },3000)
})

promise1.then((res) => {
    console.log(res);
});
promise2.then((res) => {
    console.log(res);
})

Promise.all([promise1,promise2]).then((res)=> {
    console.log(res);
})
Promise.race([promise1,promise2]).then((res)=> {
    console.log(res);
})