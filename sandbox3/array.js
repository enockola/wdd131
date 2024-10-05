const steps = ["one", "two", "three"];

function listTemplate(step) {
    return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML

document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

listTemplate(steps[0]);

const letterGrade = ["A", "B", "C"];

function gradeConversion(grade) {
    let gpa = "";

    if (grade === "A") {
        gpa = "4.0";
    }
    else if (grade === "B") {
        gpa = "3.0";
    }
    else {
        gpa = "2.0";
    }
    return gpa;
}

const newLetterGrade = letterGrade.map(gradeConversion);

const totalPoints = newLetterGrade.reduce(function (total, item) {
    return total + item;
});

const gpaGrade = totalPoints / newLetterGrade.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const filteredFruits = fruits.filter(function (word){
    return word.length > 6;
});

const numbers = [12, 34, 21, 54];

let luckyNumber = 21

const numIndex = numbers.indexOf(luckyNumber);

console.log(numIndex);