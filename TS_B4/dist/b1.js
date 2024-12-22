"use strict";
class calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            return 0;
        }
        else {
            return a / b;
        }
    }
}
var Input;
(function (Input) {
    Input["add"] = "add";
    Input["subtract"] = "sub";
    Input["multiply"] = "mul";
    Input["divide"] = "div";
    Input["end"] = "end";
})(Input || (Input = {}));
class MainCalculator {
    run() {
        const cal = new calculator();
        let input;
        let a = Number(prompt(`Enter random number: `));
        let b = Number(prompt(`Enter random number: `));
        do {
            input = String(prompt('Calculator:\n\n' +
                `${Input.add}: Add two number.\n` +
                `${Input.subtract}: Subtract two number.\n` +
                `${Input.multiply}: Multiply two number.\n` +
                `${Input.divide}: Divide two number.\n` +
                `${Input.end}: Stop the program.`));
            switch (input) {
                case Input.add:
                    console.log(cal.add(a, b));
                    break;
                case Input.subtract:
                    console.log(cal.subtract(a, b));
                    break;
                case Input.multiply:
                    console.log(cal.multiply(a, b));
                    break;
                case Input.divide:
                    console.log(cal.divide(a, b));
                    break;
                case Input.end:
                    return;
            }
        } while (input !== Input.end);
    }
}
new MainCalculator().run();
