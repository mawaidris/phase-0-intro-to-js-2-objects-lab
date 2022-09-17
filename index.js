const employee = {
    name : "Sam",
    streetAddress: "11 Broadway"
}
// return {...obj, [name]:mawa}
// return {...obj, [streetAddress]:Earth}
const updateEmployeeWithKeyAndValue = (employee ,key ,value) => {
    // return {...obj, ...{[key]:value}}
    return Object.assign({},employee,{[key]:value})
};
// const newObj= updateEmployeeWithKeyAndValue(employee, "name", "Mawa");
// const newObj1 = updateEmployeeWithKeyAndValue(employee,"streetAddress", "Earth");

 const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    // return {...employee, ...{[key]:value}}
    employee[key] = value;
    return employee
 }
 const deleteFromEmployeeByKey = (employee, key) => {
 var duplicate = Object.assign({}, employee);
    delete duplicate[key];
    return duplicate
 }
 const destructivelyDeleteFromEmployeeByKey = (employee, key) => {

delete employee[key];
return employee
}
// const deleteFromEmployeeByKey = (employee, key) => {
//     delete employee[key];
   
   
// }



//https://exploringjs.com/deep-js/ch_updating-destructively-and-nondestructively.html
// const obj = {
    //     name : "Sam",
    //     streetAddress: "11 Broadway"
    //     name : "Mawa",
// }

// const newObj = updateEmployeeWithKeyAndValue(obj, "streetAddress", "Earth")

// const obj = {
//     name : "Sam",
//     streetAddress: "Earth"
// }

// const arr = [0,1,2,3,4,5]
// //             0,1,2,3,4,5
// const newArr =[...arr]
// newArr.push(6)
// console.log("Arr: "+arr);
// console.log("newArr: "+newArr)