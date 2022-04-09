console.log('typescript');

type user = {
    id: number;
    name: string;
    type: string;
}

let res = getAdmins(arr1,arr2);
let res2 = longName(res);
console.log(res2);

function getAdmins(arr1:any[], arr2:any[]) {
    const arrTemp: any[] = arr1.concat(arr2);
    return arrTemp.filter((item) => {
        return item.role === 'admin';
    }).sort((a,b) => {
        return a.id - b.id;
    })
}

function longName(arr:any[]){
    return arr.sort((a,b) => {
        return b.name.split(" ")[1].length - a.name.split(" ")[1].length;
    })[0]
}

