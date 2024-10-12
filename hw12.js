const user = {
    mod: "happy",
    hobby: "skydiving",
    premium: false,
}
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`)
}



const products = {
    name: "Smith",
    age: 33,
    length: 183,
    job: "Web developer"
}
function countProps(obj) {
    const result = Object.values(products).length;
    return result;
}
console.log(countProps());





const salary = {
    Mark: 1500,
    Max: 1050,
    Alex: 5500,
}
const objectValues = Object.values(salary);
console.log(objectValues);
let sum = 0;
for (const objectValue of objectValues) {
    sum += objectValue
}
console.log(`Sum of all salaries: ${sum}`);
for (const key of Object.keys(salary)) {
    console.log(`${key}: ${salary[key]}`)
}



const employees = {
    Alexander: 3,
    Sascha: 7,
    Ivan: 5,
};
function findBestEmployee(employees) {
    let bestEmployee = "";
    let maxTasks = 0;
    for (const employee in employees) {
        if (employees[employee] > maxTasks) {
            maxTasks = employees[employee];
            bestEmployee = employee;
        }
    }
    return bestEmployee;
}
console.log(findBestEmployee(employees));









