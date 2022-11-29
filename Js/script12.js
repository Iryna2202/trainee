const arr = ['a', 'b', 'c']; //masive

arr[10] = '3456';

console.log(arr);

const arrobj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def:{

        }
    }
};
const b = 'b';
arrobj.b = '1234';
arrobj[b] = [];

console.log(arrobj['b']);
console.log(arrobj.b);

//const obj = {a: 1, b: 2}; //object

const obj = {
    'Anna': 500,
    'Alice:': 800
};


const storeName = 'Nike';

const storeDescription = {
    budget: 1000,
    employees: ['Anna', 'Alina', 'Ira'],
    products: {
        'chocolate': 20,
        'milk': 30
    },
    open: true
}
const storeName = 'My awesome store';

const storeDescription = {
    budget: 10000,
    employees: ['Alex', 'John', 'Sam'],
    products: {
        'soap': 20,
        'water': 5
    },
    open: true
}






