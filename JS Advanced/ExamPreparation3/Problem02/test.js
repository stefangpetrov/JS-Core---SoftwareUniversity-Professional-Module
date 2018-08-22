let expect = require("chai").expect;

const createList = require('./CreateList');

describe('all tests', function () {

    let newList;
    beforeEach(function () {
        newList = createList();
    });

    describe('add func', function () {

        it('should append at the end', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });
    });

    describe('shiftLeft func', function () {

        it('should shift correctly', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            newList.shiftLeft();
            expect(newList.toString()).to.be.equal('mlas, 5, das');
        });

    });

    describe('shiftRight func', function () {

        it('should shift correctly', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            newList.shiftRight();
            expect(newList.toString()).to.be.equal('5, das, mlas');
        });
    });

    describe('swap func', function () {
        it('first index equals 0', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            newList.swap(0,1);
            expect(newList.toString()).to.be.equal('mlas, das, 5');
        });

        it('first index negative', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            const output = newList.swap(-1,1);

            expect(output).to.be.false;
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });

        it('first index equals length', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            const output = newList.swap(3,1);

            expect(output).to.be.false;
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });

        it('first index is not integer', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            const output = newList.swap(1.5,1);

            expect(output).to.be.false;
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });

        it('second index negative', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            const output = newList.swap(1,-2);

            expect(output).to.be.false;
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });

        it('second index equals length', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            const output = newList.swap(1,3);

            expect(output).to.be.false;
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });

        it('second index is not integer', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            const output = newList.swap(1,2.5);

            expect(output).to.be.false;
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });

        it('second index equals 0', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            newList.swap(1,0);
            expect(newList.toString()).to.be.equal('mlas, das, 5');
        });

        it('first index equals second index', function () {
            newList.add('das');
            newList.add('mlas');
            newList.add(5);
            const output = newList.swap(1,1);

            expect(output).to.be.false;
            expect(newList.toString()).to.be.equal('das, mlas, 5');
        });
    });


});