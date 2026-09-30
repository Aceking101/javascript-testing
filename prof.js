let firstName = "KINGDAVID";
let lastName = "NWOSE";
let age = 21;
const studentId = "STU-00023";
const gpa = 3.46;
const isEnrolled = true;
let graduationDate = null ;


console.log("FIRSTNAME:", firstName)
console.log("LASTNAME:", lastName)
console.log( "AGE:", age )
console.log("STUDENTID:", studentId)
console.log( "GPA:",  gpa)
console.log("ISENROLLED:", isEnrolled)
console.log("GRADUATIONDATE:", graduationDate)


firstName = "SOMTOCHUKWU"

console.log("FIRSTNAME:", firstName)
console.log("LASTNAME:", lastName)
console.log( "AGE:", age )
console.log("STUDENTID:", studentId)
console.log( "GPA:",  gpa)
console.log("ISENROLLED:", isEnrolled)
console.log("GRADUATIONDATE:", graduationDate)


// OPERATORS

let totalScore = 0;
console.log(totalScore);

totalScore += 45;
console.log("firstest:", totalScore);

totalScore += 30;
console.log("secondtest:", totalScore);

totalScore -= 5;
console.log("Due to error:", totalScore);

totalScore *= 2;
console.log("bonus:", totalScore);

totalScore++;
console.log("extrascore:", totalScore);

totalScore %= 7;
console.log("remainder:", totalScore);

// type conversion

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// Number() converts "19" to a whole number
let studentNumber = Number(studentAge);


// parseFloat() converts "74.5" to a decimal number
let examfloat = parseFloat(examScore);


// Number() converts "50" from a string to a number
let passNumber = Number(passMark);

// String() converts the number 101 to text
let stringName = String(studentName);


let isGreater = examfloat > passNumber ;

console.log (typeof studentNumber, studentNumber);

console.log (typeof examfloat, examfloat);

console.log (typeof passNumber, passNumber);

console.log (typeof stringName, stringName);

console.log (typeof isGreater, isGreater);





// conditional statement

let scores = [70, 60, 42, 30 ];

scores.forEach ( score => {

    let grade ;

    if (score >= 70) {
        grade = `A - Distinction`;
    // console.log(`Score: ${score} || grade: A - Distinction`);
    // passed.textContent = "DISTINCTION";

}
    else if (score <= 69 && score >= 60) {
        grade= `B - Merit`;
    // console.log(`Score: ${score} || grade: B - Merit`);
    // passed.textContent = "MERIT";
}
    else if (score <= 59 && score >= 50) {
    grade = `C - Pass`;
    // console.log(`Score: ${score} || grade: C - Pass`);
    // passed.textContent = "PASS";
}
    else if (score <= 49 && score >= 40) {
        grade = `D - Near Pass`;
    // console.log(`Score: ${score} || grade: D - Near Pass`);
    // passed.textContent = "NEAR PASS";
}
     else  {
        grade= `F - Fail`
    // console.log(`Score: ${score} || grade: F - Fail`)
    // passed.textContent = "He failed";
}

console.log(`${score} || ${grade}`)
let passed = document.querySelector("p");
passed.classList.add("center");
let fresh = document.createElement("h2");
fresh.textContent = `${score} || ${grade}`;
passed.appendChild(fresh)
})






