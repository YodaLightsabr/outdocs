class Printer {
    message: string;

    constructor (message: string) {
        this.message = message;
    }
    print () {
        console.log(this.message);
    }
}

const printer: Printer = new Printer('Hello World');

printer.print();