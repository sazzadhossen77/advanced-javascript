const students = [
    {id: 21, name: 'Akib Hasan'},
    {id: 31, name: 'Mahim'},
    {id: 41, name: 'Piplo'},
    {id: 71, name: 'Shuvo'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
//const bigger = students.filter( s => s.id>40);
const biggerOne= students.find( s => s.id>40);

console.log(biggerOne);
console.log(bigger);