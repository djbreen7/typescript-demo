interface Identifiable<T> {
    id: T;
}

export class Dragon implements Identifiable<string> {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

}

export class Human implements Identifiable<number> {
    id: number;
}

