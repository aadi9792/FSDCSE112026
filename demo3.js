const student ={
    name: "John Doe",
    age: 20,
    branch: "Computer Science",
}

const newStudent = {
    ...student,
    section: "A",
}

console.log("new object name :" + newStudent.name);
console.log("new object age :" + newStudent.age);
console.log("new object branch :" + newStudent.branch);
console.log("new object section :" + newStudent.section);
