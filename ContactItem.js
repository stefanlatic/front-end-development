class ContactItem {

    constructor(inputField1, inputField2) {
        this.inputField1 = inputField1;
        this.inputField2 = inputField2;
    
    }


    static fromJSON (json) {
        let contactItem = new ContactItem();
        contactItem.id = json.id;
        contactItem.inputField1 = json.inputField1;
        contactItem.inputField2 = json.inputField2;

        return contactItem;
    }
}

export default ContactItem;