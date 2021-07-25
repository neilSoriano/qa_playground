class Employee {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;

    constructor(id, name, phoneNumber, email) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() : string {
        let output =
            `This is an instance of Employee ... \n` +
            `\tID: ${this.id}\n` +
            `\tName: ${this.name}\n` +
            `\tPhone Number: ${this.phoneNumber}\n` +
            `\tEmail: ${this.email}`;
        return output; 
    }
}

let Dennis = new Employee(1, "Dennis Soriano", "319-271-5394", "dennisoriano@yahoo.com");
console.log(Dennis.toString());