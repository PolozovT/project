/*var greeting="Hi";
var chisloIzStroki=parseInt("10011", 2)

//alert(greeting);
document.write(chisloIzStroki);
 
 var chislo=chisloIzStroki.toString(2);
 document.write("<br />");
 document.write(chislo);

//rounding
document.write("<br />");
document.write(12.222^0);
document.write("<br />");
document.write(0^12.222);*/

/*var str="hello";

if (~str.indexOf("lo")){
	alert("found!");
}


function isInteger(num) {
  return (num ^ 0) === num;
}

document.write("<br />");
document.write(isInteger(1.3));

var name = prompt("Ваше имя?", "");
alert("hello, "+name );

var age = prompt('Введите возраст', 0);

var message = (age < 3) ? "Hello, malysh":
(age < 18) ? "Hi":
(age < 100) ? "Good afternoon!":
(age < 200) ? "HELLO, YOU SO COOL!!!":
"WAT???";

alert(message);

var namejs = prompt("Официальное название js?", "");

if (namejs == "EcmaScript") alert("Good")
	else alert("no...");
*/


/*
var admin = prompt("Кто пришел?", "");

if (admin == "админ") {
	var password = prompt("Пароль?", "");
	if (password == "чв") alert("preveD")
		else if (password == null) alert("вход отменен");
		else alert("ПAKA");
}
    else if (admin == null) alert ("вход отменен");
	else alert("я вас не знаю");

result = (a+b < 4) ? "malo": "mnogo";
*/


/*
var director = prompt('Введите login', "");

var message = (director == "vasya") ? alert("privet"):
(director == "director") ? alert("zrdaste"):
(director == "") ? alert("net logina"):
alert("");

var ages=prompt("vozrast?","");

if (!(ages>=14&&ages<=90)) alert("klevo");

*/


/*
var i = 2;
for (; i<=10; i++){
	if(i%2==0){
	alert(i);
}
}
*/


/*
var i = 0;
while ( i < 3) {
  alert( "номер " + i + "!" );
  i++;
}
*/


/*
var ch;
do{
	ch=prompt("vvedi chislo > 100", "");
}
while (ch<100 || ch==null);
*/


/*
next:
for (var i = 1; i<10; i++){
	for (var j=2; j<i; j++){
		if (i%j==0) continue next;}
		alert(i);
}
*/


/*
var browser = prompt("Введите ваш браузер");

if (browser=='IE') {
    alert( 'О, да у вас IE!' );}
    else if (browser=='Chrome' || browser=='Firefox' || browser=='Safari' || browser=='Opera'){
    	alert( 'Да, и эти браузеры мы поддерживаем' );
    }
    else{
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );}
*/


/*
var a = +prompt('a?', '');

switch (a) {
  case 0:
   alert( 0 );
   break;
  case 1: 
   alert( 1 );
   break;
  case 2:
  case 3:
   alert( '2,3' );
   break;
  default:
   alert("xz");
}
*/


/*
function showMessage(from, text) {
  text = text || 'текст не передан';
 
  alert( from + ": " + text );
}

showMessage("Маша", "Привет!"); // Маша: Привет!
showMessage("Маша"); // Маша: текст не передан
*/


/*
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
	return(age > 18) || confirm('Родители разрешили?');
}
*/


/*
function returnMin(var a, var b){
 if (a>b){ 
 	return b;
 } else {
 	return a;
 }
}
*/


/*
function pow(x,n){
	var pr=x;
	for (var i=1; i<n; i++){
		pr*=x;
	}
	return pr;
}

var x = prompt("x?",);
var n = prompt("n?",);

if (n<=1){
	alert("данная степень не поддерживается, введите n>1");
	}else{
		alert(pow(x,n));
	}
*/


/*
function sayHi() {
  alert( "Hi" );
}

alert( sayHi ); 
*/


/*
function sayHi() {   // (1)
  alert( "Привет" );
}

var func = sayHi;    // (2)
func(); // Привет    // (3)

sayHi = null;
sayHi();             // ошибка (4)
*/


/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); 
*/


/*
var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3
*/


/*
function pow(x,n){
	if (n!=1){
		return x*pow(x,n-1);
	} else{
		return x;
	}
}

alert(pow(2,5));
*/


/*
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}


alert(sumTo(100));
*/


/*
function factorial(n){
	if (n!=1){
		return n*factorial(n-1);
	} else {
		return 1;
	}
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(4));
*/


/*
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(7));
*/


/*
var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;

alert( g(5) ); // 120, работает!
*/


/*
function g() { return 1; }

alert(g); //выводит код функции
*/


/*
var f = function sayHi(name) {
  alert( sayHi ); // изнутри функции - видно (выведет код функции)
};

alert( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')
*/


/*
var hello = "Привет";

alert( hello.toUpperCase() );

var str = "Привет, мир!";
alert( str.length ); // 12
*/


/*
var n = 12.345;

alert( n.toFixed(2) ); // "12.35"
alert( n.toFixed(0) ); // "12"
alert( n.toFixed(5) ); // "12.34500"
alert(12.toFixed(1)); //ошибка!(уже при комппиляции)
alert(12..toFixed(1)); //12.0
*/


/*
var value = prompt("Введите Infinity", 'Infinity');

var number = +value;

alert( number );
*/


/*
alert( isFinite(1) ); // true
alert( isFinite(Infinity) ); // false
alert( isFinite(NaN) ); // false
*/

alert( +"12test" ); // NaN
alert( +"  -12" ); // -12
alert( +" \n34  \n" ); // 34, перевод строки \n является пробельным символом
alert( +"" ); // 0, пустая строка становится нулем
alert( +"1 2" ); // NaN, пробел посередине числа - ошибка
alert( '12.34' / "-2" ); // -6.17
alert( parseInt('12px') ); // 12
alert( parseFloat('12.3.4') ) // 12.3, ошибка на второй точке
alert( parseInt('FF', 16) ); // 255
