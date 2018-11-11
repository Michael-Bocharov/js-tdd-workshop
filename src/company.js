
class Company {
    constructor() {
    }
    getEmailByHighestPosition(employeeList, topCount) {
        const resultEmails = [];
        resultEmails.push(employeeList[0].email);
        return resultEmails;
    }
}

const Position = {
    junior: 1
};

module.exports = {
    Company,
    Position
};

