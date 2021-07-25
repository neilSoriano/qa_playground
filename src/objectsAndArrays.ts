var Me = {
    firstName : "Neil",
    lastName: "Soriano",
    age: 23,
    sports: ["basketball", "baseball", "snowboarding", "surfing",]
};
console.log(`Person:\n\tName: "${Me.firstName} ${Me.lastName}"
\tAge: ${Me.age} \n\tSports: ${Me.sports}`);

var myArray = ["Verizon", "T-Mobile", "Sprint", "AT&T"];

myArray.forEach((thing, i) => {
    console.log(`${i + 1}. ${thing}`);
});

var GF = {
    firstName: "Michelle",
    lastName: "Nguyen",
    age: 23
};

var Brother = {
    firstName: "Dylan",
    lastName: "Soriano",
    age: 13
}

var myPeople = [Me, GF, Brother];
myPeople.forEach((person, i) => {
    console.log(`Person:\n\tName: "${person.firstName} ${person.lastName}"
\tAge: ${person.age}`)
});
