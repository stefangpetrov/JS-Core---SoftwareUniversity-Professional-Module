let expect = require("chai").expect;

const Sumator = require('./2.sumatorClass');

describe("Sumator Unit Tests", function() {

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    describe('check if functions exist', function () {

        it('data is not undefined', function () {
            expect(sumator.data !== undefined).to.equal(true);
        });

        it('add func exists', function () {

            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });

        it('sumNums func exists', function () {

            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });

        it('remove by filter func exists', function () {

            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });

        it('toString func exists', function () {

            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    it("Test if data length is empty", function() {
        expect(sumator.data.length).to.be.equal(0, 'Something went wrong!');
    });

});

describe("add func tests", function() {

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    it("add only numbers", function() {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        expect(sumator.toString()).to.be.equal("5, 4, 3")
    });

    it("add only strings", function() {
        sumator.add("eho");
        sumator.add("mecho");
        sumator.add("mocha");
        expect(sumator.toString()).to.be.equal("eho, mecho, mocha")
    });

    it("add only obects", function() {
        sumator.add({name: "chefi"});
        sumator.add({});

        expect(sumator.toString()).to.be.equal("[object Object], [object Object]")
    });

    it("add mixed variables", function() {
        sumator.add({name: "chefi"});
        sumator.add(4);
        sumator.add("string");

        expect(sumator.toString()).to.be.equal("[object Object], 4, string")
    });
});

describe("sum func tests", function() {

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    it("sum only numbers", function() {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        expect(sumator.sumNums()).to.be.equal(12);
    });

    it("sum only numbers", function() {
        sumator.add("eho");
        sumator.add({});
        sumator.add("mocha");
        expect(sumator.sumNums()).to.be.equal(0)
    });

    it("sum only numbers", function() {
        sumator.add("eho");
        sumator.add(3);
        sumator.add({});
        sumator.add(3);
        expect(sumator.sumNums()).to.be.equal(6)
    });


});

describe("remove by filter func tests", function() {

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    it("removes all odd numbers", function() {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        sumator.add(2);
        sumator.removeByFilter((x) => x % 2 !== 0)
        expect(sumator.toString()).to.be.equal("4, 2");
    });

    it("removes all odd numbers", function() {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        sumator.add(2);
        sumator.removeByFilter((x) => x > 5)
        expect(sumator.toString()).to.be.equal("5, 4, 3, 2");
    });

    it("throws exception", function() {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        sumator.add(2);
        expect(() => sumator.removeByFilter(undefined)).to.throw();

    });

});

describe("toString func tests", function() {

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    it("with items", function() {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        sumator.add(2);

        expect(sumator.toString()).to.be.equal("5, 4, 3, 2");
    });

    it("no items", function() {


        expect(sumator.toString()).to.be.equal("(empty)");
    });

});
