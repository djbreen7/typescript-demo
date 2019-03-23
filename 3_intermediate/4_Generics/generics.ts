class ListNode<T> {
    private value: T;
    private next: ListNode<T> | null = null;
    public count = 0; 
    
    constructor(value: T) {
        this.value = value;
    }

    public add(value: T) {
        let current = this.next;

        while (current && current.next) {
            current = current.next;
        }

        this.next = new ListNode<T>(value);
        this.count += 1;
    }

    public print() {
        let current: ListNode<T> | null = this;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Create a list of numbers
let myNumbers = new ListNode<number>(1);
myNumbers.add(2);
myNumbers.print();

// Create a list of strings
let myAlphabet = new ListNode<string>('A');
myAlphabet.add('B');
myAlphabet.add('C');
myAlphabet.print();
console.log(myAlphabet.count);
