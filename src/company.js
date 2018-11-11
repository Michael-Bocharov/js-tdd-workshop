
class Company {
    emailsByHighestPosition(employees, limit) {
        const employeeList = [];
        for (let i = 0; i < limit; i += 1) {
            employeeList.push(employees[i]);
        }
        let i = 1;
        while (employees.length > i) {
            const employee = employeeList.sort((a, b) => (b.position - a.position)).pop();
            if (employees[i].position > employee.position) {
                employeeList.push(employees[i]);
            } else {
                employeeList.push(employee);
            }
            i += 1;
        }
        return employeeList.map(item => item.email);
    }
}

const POSITION = {
    junior: 1,
    middle: 2,
    senior: 3,
    teamLead: 4,
    projectManager: 5,
    architect: 6,
    cto: 20

};

module.exports = {
    Company,
    POSITION
};

