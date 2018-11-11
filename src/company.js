
class Company {
    constructor() {
    }
    getEmailByHighestPosition(employeeList, limit) {
        const resultEmails = [];
        let employee = employeeList[0];
        if (employeeList.length > 1) {
            if (employeeList[1].position > employee.position) {
                employee = employeeList[1];
            }
        }
        resultEmails.push(employee.email);
        return resultEmails;
    }
}

const Position = {
    junior: 1,
    middle: 2
};

module.exports = {
    Company,
    Position
};

