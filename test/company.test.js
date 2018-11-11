const chai = require('chai');
const { Company, POSITION } = require('../src/company');

const { expect } = chai;

let company;
describe('Company', () => {
    beforeEach(() => {
        company = new Company();
    });

    it('extract one email when list contains one item', () => {
        const employees = [
            {
                position: POSITION.junior,
                email: 'junior@company.com'
            }
        ];
        const emails = company.emailsByHighestPosition(employees, 1);

        expect(emails).to.have.members(['junior@company.com']);
    });

    it('extract one email when list contains two items', () => {
        const employees = [
            {
                position: POSITION.junior,
                email: 'junior@company.com'
            },
            {
                position: POSITION.middle,
                email: 'middle@company.com'
            }
        ];
        const emails = company.emailsByHighestPosition(employees, 1);

        expect(emails).to.have.members(['middle@company.com']);
    });

    it('extract one email when list contains three items', () => {
        const employees = [
            {
                position: POSITION.junior,
                email: 'junior@company.com'
            },
            {
                position: POSITION.middle,
                email: 'middle@company.com'
            },
            {
                position: POSITION.senior,
                email: 'senior@company.com'
            }
        ];
        const emails = company.emailsByHighestPosition(employees, 1);

        expect(emails).to.have.members(['senior@company.com']);
    });

    it('extract two email when list contains three items', () => {
        const employees = [
            {
                position: POSITION.junior,
                email: 'junior@company.com'
            },
            {
                position: POSITION.middle,
                email: 'middle@company.com'
            },
            {
                position: POSITION.senior,
                email: 'senior@company.com'
            }
        ];
        const emails = company.emailsByHighestPosition(employees, 2);

        expect(emails).to.have.members(['middle@company.com', 'senior@company.com']);
    });

    it('extract two email when list contains same items position', () => {
        const employees = [
            {
                position: POSITION.junior,
                email: 'junior1@company.com'
            },
            {
                position: POSITION.junior,
                email: 'junior2@company.com'
            },
            {
                position: POSITION.middle,
                email: 'middle@company.com'
            },
            {
                position: POSITION.projectManager,
                email: 'projectManager@company.com'
            },
            {
                position: POSITION.cto,
                email: 'cto@company.com'
            }
        ];
        const emails = company.emailsByHighestPosition(employees, 2);

        expect(emails).to.have.members(['projectManager@company.com', 'cto@company.com']);
    });

    it('extract two email when it position same in top', () => {
        const employees = [
            {
                position: POSITION.middle,
                email: 'middle1@company.com'
            },
            {
                position: POSITION.junior,
                email: 'junior1@company.com'
            },
            {
                position: POSITION.junior,
                email: 'junior2@company.com'
            },
            {
                position: POSITION.middle,
                email: 'middle2@company.com'
            },
        ];
        const emails = company.emailsByHighestPosition(employees, 2);

        expect(emails).to.have.members(['middle1@company.com', 'middle2@company.com']);
    });
});
