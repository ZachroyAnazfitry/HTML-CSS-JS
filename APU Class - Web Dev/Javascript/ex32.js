// computes age using defined function
/* @param yearOfBirth*/

function getAge(yearOfBirth) {
    let now = new Date();
    // cuurrent year minus input
    let age = now.getFullYear() - yearOfBirth;
    return age;
}

let yob = prompt('enter your birth year');
if (yob !== null) {
    let yourAge = getAge(yob);
    alert(yourAge)
} else{
    alert("Oops! Something went wrong.")
}

console.log(age);