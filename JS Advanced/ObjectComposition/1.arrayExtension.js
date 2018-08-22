(function solve(){

    Array.prototype.last = function () {

        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {

        let result = [];

        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.take = function (n) {

        let result = [];

        for (let i = 0; i < this.length; i++) {
            if(i === n){
                break;
            }
            else{
                result.push(this[i]);
            }
        }

        return result;
    };

    Array.prototype.sum = function (n) {

        let sum = 0;

        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }

        return sum;
    };

    Array.prototype.average = function (n) {

        let average = 0;

        for (let i = 0; i < this.length; i++) {
            average += this[i];
        }

        return average / this.length;
    };


})();