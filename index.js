var Printer = /** @class */ (function () {
    function Printer(message) {
        this.message = message;
    }
    Printer.prototype.print = function () {
        console.log(this.message);
    };
    return Printer;
}());
var printer = new Printer('Hello World');
printer.print();
