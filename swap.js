let a
let b
[a, b] = [1, 4]
console.log(`ini a: ${a} dan ini b ${b}`);
//swap now
[a, b] = [b, a]
console.log(`ini a: ${a} dan ini b ${b} setelah swap`);

//cara temporary variable
let c = 1;
let d = 2;
let temp;
console.log(`ini c: ${c} dan ini d ${d} temp`);

temp = c;
c = d;
d = temp;
console.log(`ini c: ${c} dan ini d ${d} temp setelah swap`);

