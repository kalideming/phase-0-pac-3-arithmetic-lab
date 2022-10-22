function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function increment(n) {
    return ++n;
}
increment(1);

function decrement(n) {
    return --n;
}
decrement(1);

function makeInt(n) {
 return parseInt(n, 10);   
}
makeInt('0x2328');
makeInt('sldkjflksjf');

function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal('2.222');
preserveDecimal('sldkjflksjf');