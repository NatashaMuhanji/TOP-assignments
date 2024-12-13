function add (a, b){
    return a + b;
}
function subtract (a, b){
    return a - b;
}
function multiply (a, b){
    return a * b;
}
function divide (a, b){
    return a / b;
}
function modulus (a, b){
    return a % b;
}
function power (a, b){
    return Math.pow(a, b);
}
function factorial (a){
    let product = 1;
    for (let i = a; i > 0; i--){
        product *=i;
    }
    return product;
}
function operate (a, b, operator){
    return operator(a,b);
}