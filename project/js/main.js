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


/*
alert( +"12test" ); // NaN
alert( +"  -12" ); // -12
alert( +" \n34  \n" ); // 34, перевод строки \n является пробельным символом
alert( +"" ); // 0, пустая строка становится нулем
alert( +"1 2" ); // NaN, пробел посередине числа - ошибка
alert( '12.34' / "-2" ); // -6.17
alert( parseInt('12px') ); // 12
alert( parseFloat('12.3.4') ) // 12.3, ошибка на второй точке
alert( parseInt('FF', 16) ); // 255
*/


/*
var x = prompt("введите число", "11.1");

if (isNaN(x)) {
  alert("не число");
} else {
  alert("число");
}
*/


/*
alert( isNaN(null) ); //  false - не NaN, т.е. "число"
alert( isNaN("\n  \n") ); //  false - не NaN, т.е. "число"
*/



/*
function numeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}
*/


/*
var n = 1234567890;
alert(n.toString(36)); //kf12oi
*/


/*
alert( Math.floor(3.1) );  // 3
alert( Math.ceil(3.1) );   // 4
alert( Math.round(3.1) );  // 3
*/


/*
alert( ~~12.3 ); // 12
alert( 12.3 ^ 0 ); // 12
alert( 1.2 + 1.3 ^ 0 ); // 2, приоритет ^ меньше, чем +
var x = a * b / c ^ 0; // читается как "a * b / c и округлить"
*/


/*
var n = 3.466;
alert(Math.round(n*100)/100); //3.466 -> 346.6 -> 347 -> 3.47
*/


/*
var n = 12.3463;
alert(n.toFixed(2));
alert(+n.toFixed(2)); //именно число
*/


/*
var price = 6.35;

alert(price.toFixed(1)); //6.3
alert(Math.round(price*10)/10); //6.4
*/


/*
alert(0.1 + 0.2 == 0.3); //false
alert(0.1 + 0.2); //0.30000000000000004
alert(0.1 + 0.2 > 0.3); //true
*/


/*
alert(0.1.toFixed(20)); //0.10000000000000000555
*/


/*
alert ((0.1 * 10 + 0.2 * 10) / 10); //0.3
*/


/*
var res = 0.1 + 0.2;
alert(+res.toFixed(10));
*/


/*
alert( 9999999999999999 ); // выведет 10000000000000000
*/


/*
var number = 123456789;

alert(number.toLocaleString()); //123 456 789
*/


/*
var x = +prompt("vvedi x","");
var y = +prompt("vvedi y","");

alert(x+y);
*/


/*
alert(6.35.toFixed(1));
*/


/*
var pr1 = 0.1, pr2 = 0.2;
alert(+(pr1 + pr2).toFixed(2) + "$");
*/


/*
var i = 0;
while(i !=10){
  i += 0.2;
  alert(i);
}
*/


/*
function fib(n) {
  var a = 1,
    b = 0,
    x;
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b;
    b = x;
  }
  return b;
}

alert(fib(77));
*/


/*
function fibBinet(n){
  var g = (1 + Math.sqrt(5)) / 2;
  return Math.ceil(Math.pow(g, n) / Math.sqrt(5)); 
}

alert(fibBinet(77));
*/


/*
alert(Math.random().toFixed(2));
*/


/*
var max = 24;
alert (max*Math.random().toFixed(2));
*/


/*
function randInt(min, max) {
var rand = Math.round(min - 0.5 + Math.random()*(max - min - 1));
return rand;
}

alert(randInt(-5,5));
*/


/*
alert("\u00A9");
*/


/*
var str = 'I\'m a JavaScript programmer';
var str = "I'm a JavaScript programmer";
alert(str);
*/


/*var str = 'simvol\\';
alert(str);
alert("\\a");
*/


/*
var str = "jQuery";
alert(str.charAt(0));
*/


/*
var str = "jQuery";
alert(str[0]);
*/


/*
alert("".charAt(0)); // пустая строка
alert(""[0]); // undefined
*/


/*
var str = "stroka";

str = str[3] + str[4] + str[5];

alert(str);
*/


/*
var str = "interface";
alert(str[0].toUpperCase());
*/


/*
var str = "abcdefghijklmnop";
alert(str.indexOf("bcd"));
*/


/*
var str = "abcdefghijklmnopbcd";
alert(str.indexOf("bcd", 2));
alert(str.lastIndexOf("bcd", 2));
*/


/*
var str = "index";  

if (~str.indexOf("x")){
  alert("ok");
}

alert(~2); //~2 = -(2 + 1)
*/


/*
var str = "osel ia-ia prishel", 
target = "ia";

var pos = 0;
while (true){
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert("нашли на позиции " + foundPos);
  pos = foundPos + 1;
}

var pos = -1;
while ((pos =   str.indexOf(target, pos + 1)) != -1) {
  alert("нашли на позиции " + pos);
}
*/


/*
 var str = "string";
 alert(str.substring(0,4)); //начало и конец подстроки
*/


/*
var str = "string";
alert(str.substr(2,4)); //начало и длина подстроки
*/


/*
var str = "string";
alert(str.slice(2,4)); //начало и конец строки(не включительно)
*/


/*
var str = "string";
alert(str.substring(-2)); //string; -2 -> 0
alert(str.slice(-2)); //ng; -2 отсчитывает с конца
*/


/*
alert(String.fromCharCode(1073));
alert("string".charCodeAt(2));
*/


/*
var str;
for (var i = 1034; i<=1113; i++){
  str += String.fromCharCode(i);
}

alert(str);
*/


/*
var str = "car"; 

alert(str.localeCompare("card")); //-1
*/


/*
function ucFirst(str){
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("gop"));
*/


/*
function checkSpam(str) {
var rez = false;
strng = str.toLowerCase();
if ((strng.indexOf("xxx") >= 0) || (strng.indexOf("viagra") >= 0)) rez = true;
return rez;
//return !!(~strng.indexOf("xxx") || ~strng.indexOf("viagra"));
}

alert(checkSpam("xviagrAx"));
*/


/*
function truncate(str, maxlength) {
  if ((!str) || (!maxlength)) return "vvedite vse dannie";

  if (maxlength <= str.length) {
    var len = maxlength - 3;
    str = str.substring(0, len) + "...";
  }  
  return str; 
}

alert(truncate("dasgfdsfda", 7));
*/


//гласные в верхний регистр???
/*
var glas = [e, y, u, i, o, a];

function smenaRegistraGlas(str) {

  for (var i = 0; i < (str.length - 1), i++){
    if (glas.indexOf(srt[i][, fromIndex]) != -1) {
    return str;
    }
  }
}

alert(smenaRegistraGlas());
*/


/*
function extractCurrencyValue(str) {
 return +str.substr(1,);
}

alert(extractCurrencyValue("$133") + 1);
*/


/*
o = {}; //пустой объект / o = new Object();

var person = {};

person.name = "Vasya";
person.age = 25;

alert(person.name + ": " + person.age);

if ("name" in person) {
  alert ("name exists");
}

alert(person.lalala);

alert(person.lalala === undefined); //true
alert(person.age === undefined); //false
*/


/*
var person = {};

person['first name'] = "Vasya"; //ok
person.first name = "Vasya";//???
*/


/*
var person = {}
person.age = 25;
var key = 'age';

alert(person[key]);
*/


/*
var menuSetup = {
  width: 300,
  'height': 200,
  "title": "Menu"
};
 // ===
var menuSetup = {};
menuSetup.width = 300;
menuSetup.height = 200;
menuSetup.title = "Menu";
*/


/*
var user = {
  name: "Tanya",
  age: 23,
  size: {
    top: 90,
    middle: 60,
    bottom: 90
  }
};

alert(user.name);
alert(user.size.top);
alert(user.size);
*/


/*
var user = {};
user.name = "Vasya";
user.surname = "Petrov";
user.name = "Sergey";
delete user.name;
*/


/*
var menu = {
    width: 300,
    height: 200,
    title: "Menu"
};
counter = 0;
for (var key in menu) {
  counter++;
}
alert("Всего свойств: " + counter);
*/


/*
var codes = {
    "7": "Russia",
    "38": "Ukrain",
    "1": "USA"
};
for (var code in codes) alert(code); //1, 7, 38
*/


/*
var user = {
    name: "Vasya",
    surname: "Petrov"
};
user.age = 24;
for (var prop in user) alert(prop);
*/


/*
var codes = {
    "+7": "Russia",
    "+38": "Ukrain",
    "+1": "USA"
};
for (var code in codes) {
    var value = codes[code];
    code = +code;
    alert(code + ": " + value);
}
*/


/*
function isEmpty(obj) {
    var counter = 0;
    for (var code in obj) {
        counter++;
    }
   return (counter === 0);
}
var schedule = {};
alert(isEmpty(schedule));
*/


/*
var salaries = {
    "Vasya": 100,
    "Petya": 300,
    "Dasha": 250
};
var sum = 0;
for (var name in salaries) {
    sum += salaries[name];
}
 alert(sum);
*/


/*
"use strict";
var salaries = {
    "Vasya": 100,
    "Petya": 300,
    "Dasha": 250
};
var zp = 0;
var val = "";
    for (var code in salaries) {
    if (salaries[code] > zp) {
        zp = salaries[code];
        val = code;
    }
}
alert(val || "no employees");
*/


/*
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(men){
    for (var key in men){
        if (isNumeric(men[key])){
            men[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
alert ("menu width: " + menu.width + "\nmenu height: " + menu.height + "\nmenu title: " + menu.title);
*/


/*
var toLowerCase = function(str) {
  var len = str.length;
  var stri = "";

  for (var i = 0; i < len; i++) {
    stri += str[i].toLowerCase();
  }
  return stri;
};

alert (toLowerCase("ADaf"));
*/


/*
var user = {
  name: "Vasya"
}; 

var admin = user; //вторая ссылка на один и тот же объект

admin.name = "Petya";

alert(user.name);
*/


/*
var user = {
  name: "Vasya",
  age: 30
};

var clone = {};

for (var key in user){
  clone[key] = user[key];
};

clone.name = "Petya";

alert(user.name); //Vasya
*/


/*
var fruits = ["apple", "orange", "plum"];

var arr = [1, "Name", {name: "Petya"}, true];

alert(arr[2].name);
*/


/*
var fruits = ["apple", "orange", "pear"];

alert(fruits.pop()); //deleted pear
alert(fruits); //apple, orange 
*/


/*
var fruits = ["apple", "orange"];

alert(fruits.push("pear", "egg")); //4, because fruits.push(...) <=> fruits[fruits.length]

alert(fruits); // apple, orange, pear, egg
*/


/*
var fruits = ["apple", "orange", "pear"];

alert(fruits.shift()); //deleted apple

alert(fruits); //orange, pear
*/


/*
var fruits = ["orange", "pear"];

fruits.unshift("apple", "coconaut"); //added apple, coconaut

alert(fruits);

alert(fruits.unshift("strewberry")) //5, because fruits.unshift <=> fruits[fruits.length]
*/


/*
function eat(arr) {
  arr.pop();
}

var arr = ["we're not", "afraid", "of the", "gray", "wolf"];

alert(arr.length); //5
eat(arr);
eat(arr);
alert(arr.length); //3, в функцию массив не скопирован, а передана ссылка
*/


/*
var a = [];
a[99999] = 5;
a.age = 25;
*/


/*
var a = [];
a[0] = 0;
a[5] = 5;

alert(a); //0,,,,,5
*/


// !!!!!!!!!!!!!!!!!!!
//push/pop - quickly, shift/unshift - slowly


/*
var arr = [1, 2, 3, 4, 5];

arr.length = 2; //shortened to 2 elements
alert(arr);

arr.length = 5; // returned old value
alert(arr[3]); //undefined
alert(arr); //1,2,,,
arr.length[0]; //cleared the array
*/


/*
var arr = new Array(2, 3);
alert( arr[0] ); // 2, создан массив [2, 3], всё ок

arr = new Array(2); // создаст массив [2] ?
alert( arr[0] ); // undefined! у нас массив без элементов, длины 2
*/


/*
var matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

alert(matrix[1][1]); //central elemnt
*/


/*
var goods = [1, 23, 456, 7890, 777];

function outside(arr) {
  var len = arr.length - 1;
  return arr[len];
}

alert(outside(goods));
*/


/*
var goods = [1, "gu", 1];

goods.push("computer"); 
//goods[goods.length] = "computer";

alert(goods);
*/


/*
var styles = ["jazz", "bluz"];
alert(styles);
styles.push("rok-and-roll");
alert(styles);
styles[styles.length-2] = "classic";
alert(styles);
styles.shift();
alert(styles);
styles.unshift("rap", "reggae");
alert(styles);
*/


/*
var arr = ["apple", "orange", "pear", "limon"];

var rand = Math.floor(Math.random() * arr.length);

alert(arr[rand]);
*/

/*
var arr = [];

var i = 0;

while (true) {
  var elem = prompt("enter number",);
  if (elem === "" || elem === null || isNaN(elem)){
    alert("incorrect data");
    break;
  }
  arr[i] = +elem;
  i++;
}

var sum = 0;
for (var k = 0; k <arr.length; k++){
  sum += arr[k];
}

alert(arr);
alert(sum);
*/


/*
arr = ["test", 2, 1.5, true];

function find (array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] == value)
        return i;
      } 
  
  return -1;
}

alert(find(arr, ""));
*/


/*
var arr = [5, 4, 1, 0, 7, -6, 3];

function filterRange(arr, a, b) {
  
  var filtered = [];

  for (var i = 0; i < arr.length; i++){
    if (arr[i] <= b && arr[i] >= a) 
    filtered.push(arr[i]); 
  }
  return filtered;
}

var fil = filterRange(arr, 2, 5);

alert(fil);
*/


/*
function eratosfen(n) {

}
*/


/*
functin getMaxSubSum(arr){
  
}
*/


/*
var names = 'Masha, Petya, Marina, Vasya';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  alert(arr[i] + ', you received a message');
}
*/


/*
alert("a, b, c, d".split(',', 2)); //a, b

var str = "test,we 1";

alert(str.split('')); //t,e,s,t,,,w,e, ,1
*/


/*
var arr = ["Masha", "Petya", "Marina", "Vasya"];

var str = arr.join('; ');

alert(str); //Masha; Petya; Marina; Vasya

alert(new Array(4).join("LoL")); //LolLolLol
*/


/*
var arr = ["I", "am", "kek"];

delete arr[1]; //I,,kek

alert(arr[1]); //undefined
*/


/*
var arr = ["I", "am", "kek"];

arr.splice(1,1); //начиная с позиции 1 удалить 1 элемент

alert(arr); //I,kek
*/


/*
var arr = ["I", "am", "kek", "!"];

//удалить 2 первых элемента
//и вставить другие на их место
arr.splice(0, 2, " You", "are");  


alert(arr); //You,are,kek,!
*/


/*
var arr = ["I", "am", "kek", "!"];

var removed = arr.splice(0,2);

alert(removed); //I,am
*/


/*
var arr = ["I", "am", "kek", "!"];

arr.splice(2, 0, "cool"); //с позиции 2 удалить 0, вставить "cool"

alert(arr);
*/


/*
var arr = [1, 2, 5];

// начиная с позиции индексом -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1,0,3,4);

alert(arr); //1,2,3,4,5
*/


/*
var arr = ["I", "am", "kek", "!"];

var arr2 = arr.slice(1,3); //elements 1,2 (without 3)

alert(arr2); //am,kek
*/


/*
var arr = ["I", "am", "kek", "!"];

alert(arr.slice(1)); //all elements starting from 1
*/


/*
var arr = ["I", "am", "kek", "!"];

alert(arr.slice()); //entire array
*/


/*
var arr = [1, 2, 15];

arr.sort();

alert(arr); //1,15,2 because sorts as strings
*/


/*
function compareNumeric(a,b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var arr = [12,1,2,15];

arr.sort(compareNumeric);

alert(arr); //1,2,12,15
*/




























