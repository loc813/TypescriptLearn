function bct(): void {
    for (let i: number = 1; i <= 10; i++) {
        for (let j: number = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}\n`)
        }  
        console.log("===========");
    }
}
console.log(bct());