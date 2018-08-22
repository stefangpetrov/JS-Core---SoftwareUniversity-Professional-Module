let expect = require("chai").expect;

const StringBuilder = require('./2.StringBuilder');



describe('default test', function () {

    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder('test');
    });


    it('check methods', function () {
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('append')).to.be.equal(true);
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('prepend')).to.be.equal(true);
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('insertAt')).to.be.equal(true);
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('remove')).to.be.equal(true);
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('toString')).to.be.equal(true);
    });



    it('initialize with string', function () {

        expect(stringBuilder.toString()).to.be.equal('test');
    });

    it('initialize without string', function () {
        stringBuilder = new StringBuilder();
        expect(stringBuilder.toString()).to.be.equal('');
    });

    it('should throw error', function () {

        expect(() => stringBuilder = new StringBuilder({})).to.throw(TypeError);
    });
});

describe('append func tests', function () {

    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder('test');
    });

    it('appends', function () {

        stringBuilder.append(' func');
        expect(stringBuilder.toString()).to.be.equal('test func');
    });

    it('appends as an array', function () {

        stringBuilder.append(' func');
        expect(stringBuilder._stringArray.length).to.be.equal(9);
    });

    it('append error', function () {

        expect(() => stringBuilder.append({})).to.throw(TypeError);
    });





});

describe('prepend func tests', function () {

    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder('test');
    });

    it('prepends', function () {

        stringBuilder.prepend(' func');
        expect(stringBuilder.toString()).to.be.equal(' functest');
    });

    it('prepends as an array', function () {

        stringBuilder.prepend(' func');
        expect(stringBuilder._stringArray.length).to.be.equal(9);
    });

    it('prepend error', function () {

        expect(() => stringBuilder.prepend({})).to.throw(TypeError);
    });



});

describe('insertAt func tests', function () {

    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder('test');
    });

    it('inserts', function () {

        stringBuilder.insertAt(' func', 0);
        expect(stringBuilder.toString()).to.be.equal(' functest');
    });

    it('inserts as an array', function () {

        stringBuilder.insertAt(' func', 0);
        expect(stringBuilder._stringArray.length).to.be.equal(9);
    });

    it('inserts error', function () {
        expect(() => stringBuilder.insertAt(5, 'hh')).to.throw(TypeError);
    });





});

describe('remove func tests', function () {

    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder('test');
    });

    it('removes', function () {

        stringBuilder.remove(0, 3);
        expect(stringBuilder.toString()).to.be.equal('t');
    });

    it('removes as an array', function () {

        stringBuilder.remove(0, 2);
        expect(stringBuilder._stringArray.length).to.be.equal(2);
    });

});


