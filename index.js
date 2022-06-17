// Write your solution in this file!
const employee = {
    name : "Aakash",
    streetAddress : "N Princess",
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key] : value,
    };
}

const newEmployee1 = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.streetAddress = "12 Broadway";
    return employee;
}

const newEmployee = {...employee};
function deleteFromEmployeeByKey(employee,key){
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}



