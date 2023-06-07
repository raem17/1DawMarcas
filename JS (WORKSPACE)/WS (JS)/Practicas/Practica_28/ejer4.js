const users = [
    {
        name: "Juan",
        age: 25,
        city: "Madrid",
        hobby: "fútbol"
    },
    {
        name: "María",
        age: 30,
        city: "Barcelona",
        hobby: "leer"
    },
    {
        name: "Pedro",
        age: 20,
        city: "Madrid",
        hobby: "programar"
    },
    {
        name: "Laura",
        age: 35,
        city: "Barcelona",
        hobby: "programar"
    },
    {
        name: "Pablo",
        age: 27,
        city: "Madrid",
        hobby: "poker"
    },
];

var madrileños = users.filter((user) => user.city.toLowerCase() == "madrid");
var mayores25 = users.filter((user) => user.age > 25);
var programador = users.find((user) => user.hobby.toLowerCase() == "programar");

madrileños.forEach((user) => console.log(user));
console.log("\n");

mayores25.forEach((user) => console.log(user));
console.log("\n");

console.log(programador);