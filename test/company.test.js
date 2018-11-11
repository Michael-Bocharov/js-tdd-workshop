const chai = require('chai');
const { Company, Position } = require('../src/company');

const { expect } = chai;

let company;
describe('Company', () => {
    beforeEach(() => {
        company = new Company();
    });

    it('extract one email when list contains one item', () => {
        const employees = [
            {
                position: Position.junior,
                email: 'junior@company.com'
            }
        ];
        const emails = company.getEmailByHighestPosition(employees, 1);

        expect(emails).to.have.members(['junior@company.com']);
    });

    it('extract one email when list contains two items', () => {
        const employees = [
            {
                position: Position.junior,
                email: 'junior@company.com'
            },
            {
                position: Position.middle,
                email: 'middle@company.com'
            }
        ];
        const emails = company.getEmailByHighestPosition(employees, 1);

        expect(emails).to.have.members(['middle@company.com']);
    });

    it('extract one email when list contains three items', () => {
        const employees = [
            {
                position: Position.junior,
                email: 'junior@company.com'
            },
            {
                position: Position.middle,
                email: 'middle@company.com'
            },
            {
                position: Position.senior,
                email: 'senior@company.com'
            }
        ];
        const emails = company.getEmailByHighestPosition(employees, 1);

        expect(emails).to.have.members(['senior@company.com']);
    });

    it('extract two email when list contains three items', () => {
        const employees = [
            {
                position: Position.junior,
                email: 'junior@company.com'
            },
            {
                position: Position.middle,
                email: 'middle@company.com'
            },
            {
                position: Position.senior,
                email: 'senior@company.com'
            }
        ];
        const emails = company.getEmailByHighestPosition(employees, 2);

        expect(emails).to.have.members(['middle@company.com', 'senior@company.com']);
    });

    it('extract two email when list contains same items position', () => {
        const employees = [
            {
                position: Position.junior,
                email: 'junior1@company.com'
            },
            {
                position: Position.junior,
                email: 'junior2@company.com'
            },
            {
                position: Position.middle,
                email: 'middle@company.com'
            },
            {
                position: Position.projectManager,
                email: 'projectManager@company.com'
            },
            {
                position: Position.cto,
                email: 'cto@company.com'
            }
        ];
        const emails = company.getEmailByHighestPosition(employees, 2);

        expect(emails).to.have.members(['projectManager@company.com', 'cto@company.com']);
    });
});
