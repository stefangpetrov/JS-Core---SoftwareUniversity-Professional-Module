class PaymentProcessor {
    constructor(options){

        this.options = {};
        if(options !== undefined){
            if(options.hasOwnProperty('types')){

                this.options.types = options.types;
            }else{
                this.options.types = ['service', 'product', 'other'];
            }

            if(options.hasOwnProperty('precision')){

                this.options.precision = options.precision;
            }else{
                this.options.precision = 2;
            }
        }else{
            this.options.types = ['service', 'product', 'other'];
            this.options.precision = 2;
        }

        this.payments = [];

    }

    registerPayment(id, name, type, value){

        this._validateId(id);
        this._validateName(name);
        this._validateType(type);
        this._validateValue(value);

        value = value.toFixed(this.options.precision);

        this.payments.push({id, name, type, value});


    }

    deletePayment(id){

        let haveId = false;
        for(let payment of this.payments){
            if(payment.id === id){
                haveId = true;
                this.payments = this.payments.filter((p) => p.id !== id);

            }
        }

        if(!haveId){
            throw new Error('ID not found');
        }
    }

    get(id){
        let haveId = false;
        let output = `Details about payment ID: ${id}\n`;
        for(let payment of this.payments){
            if(payment.id === id){
                haveId = true;
                output += `- Name: ${payment.name}\n`;
                output += `- Type: ${payment.type}\n`;
                output += `- Value: ${payment.value}`;
            }
        }
        if(!haveId){
            throw new Error('ID not found');
        }




        return output;
    }

    setOptions(options){

        if(options !== undefined){
            if(options.hasOwnProperty('types') && options.types.length > 0){

                this.options.types = options.types;
            }

            if(options.hasOwnProperty('precision')){

                this.options.precision = options.precision;
            }
        }

    }

    toString(){

        let output = 'Summary:\n';
        output += `- Payments: ${this.payments.length}\n`;

        let balance = 0;

        for(let payment of this.payments){
            balance += Number(payment.value);

        }


        output += `- Value: ${balance.toFixed(this.options.precision)}`;

        return output;
    }



    _validateId(id){

        if(typeof id !== 'string' || id === ''){
            throw new Error('invalid type');
        }

        let haveId = false;
        for(let payment of this.payments){
            if(payment.id === id){
                haveId = true;
            }
        }
        if(haveId){
            throw new Error('Invalid Id');
        }
    }

    _validateName(name){

        if(typeof name !== 'string' || name === ''){
            throw new Error('Invalid Name');
        }
    }

    _validateValue(value){

        if(typeof value !== 'number'){
            throw new Error('Invalid Value');
        }
    }

    _validateType(type){

        if(!this.options.types.includes(type)){
            throw new Error('Invalid Type');
        }
    }
}



//// Initialize processor with default options
//const generalPayments = new PaymentProcessor();
//generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
//generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
//console.log(generalPayments.toString());
//
////// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);
//
//generalPayments.setOptions({types: ['product', 'material']});
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
//console.log(generalPayments.get('E028'));
//generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
//
// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
//// Should throw an error (ID not found)
//generalPayments.get('E027');
//
//generalPayments.deletePayment('E028');
//console.log(generalPayments.toString());
//
// Initialize processor with custom types
//const servicePyaments = new PaymentProcessor({types: ['service']});
//servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
//servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
//console.log(servicePyaments.toString());
////
////Initialize processor with custom precision
//const transactionLog = new PaymentProcessor({precision: 5});
//transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
//console.log(transactionLog.toString());
