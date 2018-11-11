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
});
