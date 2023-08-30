var exp = '';
function calc(v) {
    var input = document.getElementById('input');
    exp = exp + v;
    input.value = exp;
}
function solve() {
    var input = document.getElementById('input');
    exp = eval(exp);
    input.value = '👉🏻' + exp;
}
function clearSolve() {
    var input = document.getElementById('input');
    exp = '';
    input.value = exp;
}
function backSpace() {
    var input = document.getElementById('input');
    exp = input.value.slice(0, - 1);
    input.value = exp;
}
function calc_square() {
    var input = document.getElementById('input');
    exp = exp * exp;
    input.value = exp;
}