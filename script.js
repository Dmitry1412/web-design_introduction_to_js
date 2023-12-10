alert("Давайте немного посчитаем!")
let name = prompt("Введите ваше имя: ")
alert("Давайте начнем, "+name)
alert("Введите через Enter переменную, математический оператор и вторую переменную")
num1 = parseInt(prompt("Введите первую переменную: "))
op = prompt("Введите математический оператор: ")
num2 = parseInt(prompt("Введите вторую переменную: "))
mathOper(num1, op, num2)
function mathOper(num1, op, num2){
    switch (op){
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    default:
        alert(name+', возможно осуществить только простейщие математические операции (+,-,*,/');
    
}
}

