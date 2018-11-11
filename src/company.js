
class Company {
    constructor() {
    }
    getEmailByHighestPosition(employees, limit) {
        let resultEmails = [];
        let employee = employees[0];
        let i = 1;
        if (limit === 1) {
            while (employees.length > i) {
                if (employees[i].position > employee.position) {
                    employee = employees[i];
                }
                i += 1;
            }
            resultEmails.push(employee.email);
        } else {
            const employeeList = [];
            employeeList[0] = employees[0];
            employeeList[1] = employees[1];
            while (employees.length > i) {
                if (employees[i].position > employeeList[0].position) {
                    employeeList[0] = employees[i];
                } else if (employees[i].position > employeeList[1].position) {
                    employeeList[1] = employees[i];
                }
                i += 1;
            }
            resultEmails = employeeList.map(item => item.email);
        }
        return resultEmails;
    }
}

const Position = {
    junior: 1,
    middle: 2,
    senior: 3
};

module.exports = {
    Company,
    Position
};

