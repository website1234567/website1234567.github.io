function addNumbers () {
var num1 = document. getElementById ('number1').value;
var num2 = document. getElementById ('number2').value;
var sum = parseFloat(num1) + parseFloat(num2);
document.getElementById('result').innerHTML = 'Result: ' + sum;

}