class Dialog{

    constructor(message, callback){
        this.message = message;
        this.callback = callback;
        this.inputs = [];
        this.element = null;
    }

    addinput(label, name, type){
        this.inputs.push({label, name, type});
    }

    render(){
        let outerDiv = $('<div class="overlay">');
        let innerDiv = $('<div class="dialog">');
        innerDiv.append(`<p>${this.message}</p>`);

        for(let input of this.inputs){

            innerDiv.append(`<label>${input.label}</label>`);
            innerDiv.append(`<input name="${input.name}" type="${input.type}">`)
        }

        innerDiv.append($(`<button>OK</button>`).on('click', function () {
            
        }));
        innerDiv.append($(`<button>Cancel</button>`).on('click', this._cancel));

        outerDiv.append(innerDiv);

        $('body').append(outerDiv);

    }

    _cancel(){


    }
}