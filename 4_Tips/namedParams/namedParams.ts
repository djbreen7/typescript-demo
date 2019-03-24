interface PersonConstructor {
    firstName: string;
    lastName: string;
    age: number;
}

export class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor({ firstName, lastName, age }: PersonConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let daniel = new Person({
    firstName: 'Daniel',
    lastName: 'Breen',
    age: 34,
});