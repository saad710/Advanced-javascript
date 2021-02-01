const student = {
    name: "Ifrat",
    age: "23",
    country:"Bangladesh",
}

const programmer = Object.create(student);
console.log(programmer.age);
