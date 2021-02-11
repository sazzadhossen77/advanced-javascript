//Falsy:
// false
// 0
// ""
// udenfined
// null
// NaN
//Truthy
//'0', ' ' []

let name = 12;
console.log(name);
if (name || name == 0) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}
