//1
function findType(param) {
    return typeof param;
}
//2
/*let arrey = [2, 5, 8];
arrey.forEach(el => {
    console.log(el);
});*/
let forEach = (arrey, func) => {
    for (let i = 0; i < arrey.length; i++) {
        func(arrey[i]);
    }
};
//3
let map = (arrey, func) => {
    let item = [];
    forEach(arrey, el => item.push(func(el)));
    return item;
};
//4
let filter = (arrey, func) => {
    let item = [];
    forEach(arrey, el => {
        if (func(el)) {
            item.push(el);
        }
    });
    return item;
};
//5
let getAdultAppleLovers = data => {
    let sampleList = filter(data, el => el.age > 18 && el.favoriteFruit === 'apple');
    return map(sampleList, el => el.name);
};
//6
let keys = arrey => {
    let item = [];
    for (let i in arrey) {
        if (i) {
            item.push(i);
        }
    }
    return item;
};
//7
let values = arrey => {
    let item = [];
    for (let i in arrey) {
        if (arrey[i]) {
            item.push(arrey[i]);
        }
    }
    return item;
};
//8
let showFormattedDate = newDate => {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${newDate.getDate()} of ${month[newDate.getMonth()]}, ${newDate.getFullYear()}`;
}