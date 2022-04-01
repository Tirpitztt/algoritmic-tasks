
let result = getNumbers(10,20);
console.log(result);

function getNumbers(a:number, b:number) {
    let res: number[] = [];
    let i: number = 0;
    while (i <= b - a) {
        res.push(a + i);
        i++;
    }
    return res;
}