function createObj() {
    let obj = {
        extend: function (template) {
            for (let property in template) {
                if(template.hasOwnProperty(property)){
                    let value = template[property];
                    if(typeof value === "function"){
                        obj.__proto__[property] = value;
                    }else{
                        obj[property] = value;
                    }
                }
            }
        }
    };

    return obj;
}