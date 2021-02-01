for(let i = 0; i < 3; i++){
    const myFunc = () => {
        console.log(i);
    }
    console.log(i)
    console.log(myFunc);
    setTimeout(myFunc,3000)
}

