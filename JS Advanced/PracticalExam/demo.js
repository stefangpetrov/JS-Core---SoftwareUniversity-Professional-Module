let mapp = new Map();
mapp.set('id', {type:'type', value:5});
mapp.set('id2', {type:'type', value:5});
mapp.set('id3', {type:'type', value:5});

let balance = 0;
for(let id in mapp){
    console.log(mapp['id'].value);
    balance += mapp.get(id).value;
}

let obj = {type:'type', value:5};

