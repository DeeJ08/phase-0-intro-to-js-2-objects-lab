// Write your solution in this file!
const employee = {
    name: "Disney",
    streetAddress: "1234 Disneyland"
}

function updateEmployeeWithKeyAndValue( empObj,  key, value) {
    const newObj = { ...empObj }
    newObj[key] = value

    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue( empObj,  key, value) {
    empObj[key] = value

    return empObj
} 

function deleteFromEmployeeByKey( empObj,  key, value) {
    const newObj = { ...empObj }

    delete newObj[key]

    return newObj
} 

function destructivelyDeleteFromEmployeeByKey( empObj,  key, value) {
    
    delete empObj[key]
    
    return empObj
}