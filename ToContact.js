import ContactItem from "./ContactItem";

class ToContact {

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }


    add(contact) {
        this.contacts.push(contact);
        this.saveToLocalStorage();

        return this.contacts;
    }

    delete(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();

        return this.contacts;
    }


saveToLocalStorage() {
    localStorage.setItem('contact-data', JSON.stringify(this.contacts));
}

loadFromLocalStorage() {
    var json = localStorage.getItem('contact-data');

    if (json === null)
        return [];
        let jsonParsed = JSON.parse(json, (value) => {
            return value;
        });


if (jsonParsed.length === 0)
return [];

let contactItem = [];

for (let i = 0; i < jsonParsed.length; i++) {
contactItem.push(ContactItem.fromJSON(jsonParsed[i]));
}


return contactItem;
}
}

export default ToContact;