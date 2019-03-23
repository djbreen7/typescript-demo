interface PersonConstructor {
    firstName: string;
    lastName: string;
    age: number | null;
}

export class Person {
    firstName: string;
    lastName: string;
    age: number | null;

    constructor({ firstName, lastName, age }: PersonConstructor) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.age = age || null;
    }
}

let daniel = new Person({ 
    firstName: 'Daniel', 
    lastName: 'Breen',
    age: 34, });
