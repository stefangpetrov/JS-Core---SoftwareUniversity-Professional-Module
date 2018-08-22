class MailBox {

    constructor(){
        this._msgs = [];

    }

    get messageCount(){
        return this._msgs.length;
    }

    addMessage(subject, text){

        this._msgs.push({subject, text});
        return this;
    }

    deleteAllMessages(){
        this._msgs.length = 0;

    }

    findBySubject(substr){

        return this._msgs.filter(m => m.subject.includes(substr));

    }

    toString(){
        let output = '';
        if(this._msgs.length === 0){
            output = ' * (empty mailbox)';
        }
        else{
            for(let msg of this._msgs){
                output += ` * [${msg.subject}] ${msg.text}\n`;
            }
        }

        return output.trimRight();
    }


}



let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());

