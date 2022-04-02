// x_i = x_i-1 + x_i-2

const obr = 'ABBA';
const number = 5;// I can't find solve for number that biggest 37....

let res = search(strFib(number),obr);
let res2 = searchKMP(strFib(number),obr);
console.log(res);
console.log(res2);


function search(str: string, substr: string) {
    let result = [];
    if(substr==='') return 0;
    for(let i=0;i<=str.length-substr.length;i++){
        let j = 0;
        for(;j<substr.length;j++){
            if(substr[j]!=str[i+j]) break;
        }
        if(j === substr.length) result.push(i);
    }
    return result.length;
}

function searchKMP(str:string,substr:string){
    let result = [];
    if(substr==='') return 0;
    const table = prefixTable(substr);
    let i = 0;
    let j = 0;
    while(i<str.length){
        if(str[i] === substr[j]){
            i++;
            j++;
        }else if(j > 0){
            j = table[j-1];
        }else {
            i++;
        }
        if(j === substr.length){
            result.push(i-j);
            i--;
            j = 0;
        }
    }
    return result.length;
}

function prefixTable(s:string) {
    const table = [0];
    let i = 1;
    let j = 0;
    while(i<s.length){
        if(s[i] === s[j]){
            j++;
            table[i] = j;
            i++;
        }else if(j > 0){
            j = table[j-1];
        }else {
            table[i] = 0;
            i++;
        }
    }
    return table;
}
function strFib(num: number){
    let x_0 = 'BABBABAB';
    let x_1 = 'BABBAABA';
    for(let i = 0;i<num;i++){
        let temp = x_1;
        x_1 = x_0 + x_1;
        x_0 = temp;
    }
    return x_1;
}

