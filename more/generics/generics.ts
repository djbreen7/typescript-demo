class List<T> {
    private value: T;
    private next: List<T> | null = null;
    public count = 0; 
    
    constructor(value: T) {
        this.value = value;
    }

    public add(value: T) {
        let current = this.next;

        while (current && current.next) {
            current = current.next;
        }

        this.next = new List<T>(value);
        this.count += 1;
    }

    public print() {
        let current: List<T> | null = this;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let myNumbers = new List<number>(1);
myNumbers.add(2);
myNumbers.print();

let myAlphabet = new List<string>('A');
myAlphabet.add('B');
myAlphabet.add('C');
myAlphabet.print();
console.log(myAlphabet.count);

