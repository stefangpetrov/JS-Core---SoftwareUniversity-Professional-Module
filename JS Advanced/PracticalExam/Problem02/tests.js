let expect = require("chai").expect;

const PaymentPackage = require('./classOrFunction');

describe('all tests', function () {

    let payPackage;
    beforeEach(function () {
        payPackage= new PaymentPackage('HR Services', 1500);
    });

    it('should have the properties', function () {

        expect(payPackage).to.haveOwnProperty('_value');
        expect(payPackage).to.haveOwnProperty('_VAT');
        expect(payPackage).to.haveOwnProperty('_active');
        expect(payPackage).to.haveOwnProperty('_name');
        //expect(payPackage.prototype.hasOwnProperty('toString')).to.be.equal(true);
    });


    describe('general instance', function () {

        it('should throw error with no params', function () {

            expect(() => new PaymentPackage()).to.throw();

        });

        it('should initialize with two params', function () {

            payPackage = new PaymentPackage("hello", 5);

            expect(payPackage.value).to.be.equal(5);
            expect(payPackage.name).to.be.equal("hello");

        });

        it('should throw error with empty string', function () {

            expect(()=>payPackage.name = '').to.throw('Name must be a non-empty string');

        });

        it('should set name aaaa', function () {

            payPackage.name = 'aaaa';
            expect(payPackage._name).to.equal('aaaa');

        });

        it('should get name', function () {

            payPackage.name = 'aaaa';
            expect(payPackage.name).to.equal('aaaa');

        });

        it('should throw for setting non number value', function () {
            expect(() => payPackage.value = 'aaa').to.throw('Value must be a non-negative number');
            expect(() => payPackage.value = {a: 5}).to.throw('Value must be a non-negative number');
            expect(() => payPackage.value = [1,2,3]).to.throw('Value must be a non-negative number');
        });

        it('should throw for negative number value', function () {
            expect(() => payPackage.value = -5).to.throw('Value must be a non-negative number');
        });

        it('should get 22 value', function () {

            payPackage.value = 22;
            expect(payPackage.value).to.be.equal(22);
        });

        it('should throw for setting non number VAT', function () {
            expect(() => payPackage.VAT = 'aaa').to.throw('VAT must be a non-negative number');
            expect(() => payPackage.VAT = {a: 5}).to.throw('VAT must be a non-negative number');
            expect(() => payPackage.VAT = [1,2,3]).to.throw('VAT must be a non-negative number');
        });

        it('should throw for negative number value', function () {
            expect(() => payPackage.VAT = -5).to.throw('VAT must be a non-negative number');
        });

        it('should get 22 VAT', function () {

            payPackage.VAT = 22;
            expect(payPackage.VAT).to.be.equal(22);
        });

        it('active should work with true and false', function () {

            payPackage.active = true;
            expect(payPackage.active).to.be.true;
            payPackage.active = false;
            expect(payPackage.active).to.be.false;
        });

        it('should throw with non boolean active', function () {

            expect(()=> payPackage.active = 55).to.throw('ctive status must be a boolean');
        });

        it('should print with inactive label', function () {

            payPackage.active = false;
            let output = 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            expect(payPackage.toString()).to.equal(output);

        });


    })
});