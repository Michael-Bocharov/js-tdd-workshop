
class Company {
    constructor() {
    }
    getEmailByHighestPosition(employeeList, limit) {
        const resultEmails = [];
        let employee = employeeList[0];
        let i = 1;
        if (limit === 1) {
            while (employeeList.length > i) {
                if (employeeList[i].position > employee.position) {
                    employee = employeeList[i];
                }
                i += 1;
            }
            resultEmails.push(employee.email);
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

