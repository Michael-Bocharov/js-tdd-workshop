const chai = require('chai');
const { Company, POSITION } = require('../src/company');

const { expect } = chai;

let company;
describe('Company', () => {
// employee constructors
    function junior(id = '') {
        return {
            position: POSITION.junior,
            email: `junior${id}@company.com`
        };
    }
    function middle(id = '') {
        return {
            position: POSITION.middle,
            email: `middle${id}@company.com`
        };
    }
    function senior(id = '') {
        return {
            position: POSITION.senior,
            email: `senior${id}@company.com`
        };
    }
    function projectManager(id = '') {
        return {
            position: POSITION.projectManager,
            email: `projectManager${id}@company.com`
        };
    }
    function cto(id = '') {
        return {
            position: POSITION.cto,
            email: `cto${id}@company.com`
        };
    }

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
        const employees = [junior(), middle()];
        const emails = company.emailsByHighestPosition(employees, 1);

        expect(emails).to.have.members(['middle@company.com']);
    });

    it('extract one email when list contains three items', () => {
        const employees = [junior(), middle(), senior()];
        const emails = company.emailsByHighestPosition(employees, 1);

        expect(emails).to.have.members(['senior@company.com']);
    });

    it('extract two email when list contains three items', () => {
        const employees = [junior(), middle(), senior()];
        const emails = company.emailsByHighestPosition(employees, 2);

        expect(emails).to.have.members(['middle@company.com', 'senior@company.com']);
    });

    it('extract two email when list contains same items position', () => {
        const employees = [junior(1), junior(2), middle(), projectManager(), cto()];
        const emails = company.emailsByHighestPosition(employees, 2);

        expect(emails).to.have.members(['projectManager@company.com', 'cto@company.com']);
    });

    it('extract two email when it position same in top', () => {
        const employees = [middle(1), junior(1), junior(2), middle(2)];
        const emails = company.emailsByHighestPosition(employees, 2);

        expect(emails).to.have.members(['middle1@company.com', 'middle2@company.com']);
    });
});
