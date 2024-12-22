class calculator {
    add(a: number , b: number){
        return a + b;
    }

    subtract(a: number , b: number): number{
        return a - b;
    }

    multiply(a: number , b: number): number{
        return a * b;
    }

    divide(a: number , b: number): number{
        if(b === 0){
            return 0;
        }else {
            return a / b;
        }
    }

}

enum Input { 
    add = 'add', 
    subtract = 'sub', 
    multiply = 'mul', 
    divide = 'div', 
    end = 'end', 
} 


class MainCalculator { 
    run(): void { 
        const cal = new calculator(); 
        let input: string; 
        let a = Number(prompt(`Enter random number: `));
        let b = Number(prompt(`Enter random number: `));
        do { 
            input = String(prompt( 
                'Calculator:\n\n' + 
                `${Input.add}: Add two number.\n` + 
                `${Input.subtract}: Subtract two number.\n` + 
                `${Input.multiply}: Multiply two number.\n` + 
                `${Input.divide}: Divide two number.\n` + 
                `${Input.end}: Stop the program.`, 
            )); 
            switch (input) { 
                case Input.add:
                    console.log(cal.add(a,b));
                    break; 
                case Input.subtract: 
                    console.log(cal.subtract(a,b));
                    break; 
                case Input.multiply: 
                    console.log(cal.multiply(a,b));
                    break; 
                case Input.divide: 
                    console.log(cal.divide(a,b));
                    break; 
                case Input.end: 
                    return; 
            } 
        } while (input !== Input.end); 
    } 
} 

 new MainCalculator().run();