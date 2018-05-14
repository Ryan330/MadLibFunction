//User Prompts
name = prompt("What is your name?: ");
schoolSubject = prompt("What is your favorite school subject?: ");

//Madlib Function
function madlib(person, subject) {
    console.log(`${person}'s favorite subject in school is ${subject}.`);
}


madlib(name, schoolSubject);