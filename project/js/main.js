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


/*
var arr = [1, 2, 3];
arr.reverse();

alert(arr); //3,2,1
*/


/*
var arr = [1,2,3];
var newArr = arr.concat(4,5);

alert(newArr); //1,2,3,4,5
*/


/*
arr = [1,2,3];

var newArr = arr.concat([4,5],6);

alert(newArr); //1,2,3,4,5,6
*/


/*
var arr = [1,0,false];

alert(arr.indexOf(0)); //1
alert(arr.indexOf(true)); //-1
*/


/*
var store = {};

var items = ["div", "a", "form"];

for (var i = 0; i < items.length; i++) {
  var key = items[i];
  store[key] = true;
}
*/


/*
var user = {
  name: "Petya",
  age: 30
}

var keys = Object.keys(user);

alert(keys); //array properties of the object
*/


/*
var obj = {
  className: "open menu"
}


function addClass(object, cls) {
  var classes = obj.className ? object.className.split(' ') : [];
    for (var i = 0; i < classes.length; i++) {
      if (classes[i] == cls) return; //class is already there
    }

    classes.push(cls); // add

    obj.className = classes.join(' '); //update property

}

addClass(obj, "menu");
addClass(obj, ", lox");

alert(obj.className); //open menu , lox
*/


/*
function camelize(str) {
  
}
*/


/*
var hammingDistance = function(x, y) {
   return parseInt(x^y, 10).toString(2).split('1').length - 1
};

alert(hammingDistance(1,4));//2
*/


/*
var judgeCircle = function(moves) {
  var mov = moves.split('');
  var fin = false;
  var movl = mov.length;
  var koord = 0.0;

  for (i = 0; i < movl; i++){
    switch(mov[i]) {
      case 'U':
        koord += 1;
      break;
      case 'R':
        koord += 0.1;
      break;
      case 'D':
        koord -= 1;
      break; 
      case 'L': 
        koord -= 0.1;
      break;
    }
  }

koord = Math.round(koord * 10) / 10;

if (koord == 0.0) {
  fin = true;
} 

  return fin;  
};

alert(judgeCircle("LL"));
*/

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
if ('a' in window) {
  var a = 1;
}

alert(a); //1
*/


/*
if ('a' in window) {
  a = 1;
}

alert(a); //error
*/


/*
if ('a' in window) {
  a = 1;
}
var a;

alert(a); //1
*/

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
var lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

decodeMorse = function(morseCode){
  mors = morseCode.split(" ");

  for (var i = 0; i < mors.length; i++) {
    var 
  }
  return mors;
}

document.write(decodeMorse(".... . -.--   .--- ..- -.. ."));
*/


/*
var transposeMatrix = function(a) {
  var b = [];

  for (var i = 0; i < a[0].length; i++) {
    b[i] = [];
    for (var j = 0; j < a.length; j++) {
      b[i][j] = a[j][i]; 
    }
  }

  return b;
}

document.write(transposeMatrix([[1,2,3],[4,5,6]]));
*/


/*
var reverseWords = function(s) {
  var res;

  res = s.split(' ');

  for (var i = 0; i < res.length; i++) {
    res[i] = res[i].split('').reverse().join('');
  }

  res = res.join(' ');

  return res;    
}

document.write(reverseWords("Let's take LeetCode contest"));
*/


/*
var numberOfLines = function(w, s) {
    var col = 0, rows = 1, res, t = 0;

    for (var i = 0; i <s.length; i++) {
      col += w[s[i].charCodeAt(0) - 97];

      if (col > 100) {
        col = 0;
        col += w[s[i].charCodeAt(0) - 97];
        rows += 1;
      }
    }

    res = [rows, col];
    return res;
};

document.write(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
"abcdefghijklmnopqrstuvwxyz"));
*/


/*
var reverseString = function(s) {
   res = s.reverse();

   return res;
};

document.write(reverseString(["h","e","l","l","o"]));
*/


/*
var sortArrayByParityII = function(a) {
  var odd = [], even = [];

  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {even.unshift(a[i]);
    } else {odd.unshift(a[i]); 
    } 
  }

  for (var j = 0; j < a.length / 2; j++) {
    a[j*2] = even[j];
    a[j*2 + 1] = odd[j];
  }

  return a;
};

document.write(sortArrayByParityII([4, 2, 5, 7]));
*/


/*
var findComplement = function(num) {

  var s = num.toString(2);
  num = [];

  for ( var i = 0; i < s.length; i++) {
    if (s[i] == 1) num[i] = 0
      else num[i] = 1;
  }

  num = num.join('');

  return (parseInt(num, 2));
};

document.write(findComplement(20161211));
*/

/*
var numJewelsInStones = function(J, S) {
  var s = 0;
  var jarr = J.split('');
  var sarr = S.split('');

  for (i = 0; i < jarr.length; i++){
    for (j = 0; j <sarr.length; j++){
      if (jarr[i] == sarr[j])
        s+=1;
    }
  } 
  return s; 
};

alert(numJewelsInStones("aA", "aAAbbbb")); //3
*/


/*js
var numUniqueEmails = function(emails) {
  var eSet = new Set();
  var s = 0;
  for (i = 0; i < emails.length; i++){
    var st = emails[i];
    var dog = st.indexOf('@');
    fir = st.substring(0,dog);
    sec = st.substring(dog);
    //alert(fir);
    //alert(sec);
    for (j = 0; j<fir.length; j++){
      //alert(st[j]);
      var plus = st.indexOf('+');
      fir = fir.substring(0,plus);
      if (fir[j] == '.'){
        fir = fir.substring(0,j) + fir.substring(j+1);
      }
    }  
    st = fir + sec;
    eSet.add(st);
  }
  return eSet.size;
};

alert(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); //2
*/


/*
var repeatedNTimes = function(a) {
  var kol = a.length/2;
  for (i = 0; i < a.length; i++){
    var s = 0;
    for (j = 0; j < a.length; j++){
    if (a[i]==a[j]) s +=1; 
    }
    if (s == kol) 
    zifra = a[i];
  }
  return zifra;
};

document.write(repeatedNTimes([1,2,3,3]));//3
*/


/*
function swap(items, firstIndex, secondIndex) {
  var cont = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = cont;
}

function partition(a, l, r) {
  var mid = a[~~(a.length / 2)];
  var i = l;
  var j = r;
  while (i <j) {
    while (a[i] < mid){
      i++;
    }

    while (a[j] > mid){
      j--;
    }
    
    if (i<=j) {
      swap(a, i, j);
      i++;
      j--;
    } 
  }
  return i;
}

function quickSort(a, left, right) {
  var index;

  if (items.length > 1) {
    index = partition(a, left, right)

    if (left < index - 1){
      quicksort(a, left, index-1);
    }

    if (index < right){
      quicksort(a, index, right);
    }
  }
  return a;
}

document.write(quickSort([1,2,9,4,5,52,0,45,-4], 0, 8));
*/


/*
var bubbleSort = function(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let flag = 0;
    for (j = 0; j < arr.length - 1 - i; j++){
      if ( arr[j] > arr[j+1]) {
       [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
       flag++;
      }
    }
    if (flag = 0) break;
  }
  return arr;
}

document.write(bubbleSort([2,3,-1,44,7,1,0,4,9,5]));
*/


/*
var shakeSort = function(arr) {

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {

    for ( var i = left; i < right; i++) {
      if ( arr[i] > arr[i+1]) {
       [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      }
    }

    right--;

    for (var j = right; j > left; j--) {
      if ( arr[j] < arr[j-1]) {
       [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      }
    }

    left++;
    }

  return arr;
}

document.write(shakeSort([2,3,-11,44,77,11,0,4,9,5]));
*/


/*
var insertionSort = function(arr) {

}

document.write(insertionSort([2,33,-11,444,77,11,0,4,9,5]));
*/


/*
var compareNumbers = function(a,b) {
  return a - b;
};

var arrayPairSum = function(nums) {

    nums = nums.sort(compareNumbers);
    
    var s = 0;
    
    for (i = 0; i < nums.length; i += 2) {
      s += Math.min(nums[i], nums[i+1]);
    }

    return s;
};

document.write(arrayPairSum([1,4,3,2])); //4
*/


/*
var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uniqueMorseRepresentations = function(words) {
  var transSet = new Set;

  for (i = 0; i < words.length; i++) {
    var word = words[i];
    var st = "";

    for (j = 0; j < word.length; j++) {      
      var e = word[j];
      var m = alphabet.indexOf(e);
      st += morse[m];
    }
    transSet.add(st);
  } 
  return transSet.size;
};

document.write(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); //2
*/


/*
var sortArrayByParity = function(arr) {
  var arr1 = [];

  for (i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
      arr1.unshift(arr[i]);
      //alert(arr[i]);
    }

    if (arr[i] % 2 != 0) {
      arr1.push(arr[i]);
      //alert(arr[i]);
    }

  }
  return arr1;
};

document.write(sortArrayByParity([3,2,4,1])); //for example [2,4,3,1] 
*/


/* ?????????????????????????????????
var selfDividingNumbers = function(left, right) {

  var arr = [];

  for (i = 0; i < right - left + 1; i++) {
    arr[i] = left + i;
    //alert(arr);
  }   

  var arr1 = [];

  for (i = 0; i < arr.length; i++) {

    var a = arr[i];
    var flag = false;

    for (j = 0; j < a.length; j++) {

      if (arr[i] % a[j] != 0) {
       flag = false
      }

      arr1.unshift(arr[i]);
    }
  }

return arr1;

};

document.write(selfDividingNumbers(1,22)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

//alert("12345".split(""));
*/


/*
var sortedSquares = function(A) {
    var arr = [];
    var len = A.length;

    for (var i = 0; i < len; i++) {
      A[i] = Math.pow(A[i],2); 
      arr.push(A[i]);
    };

    arr.sort(function(a,b) {
      return a - b;
    });

    return arr;
};

document.write(sortedSquares([-4,-1,0,3,10]));//[0,1,9,16,100]
*/


/* YANDEX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
function Ticker(_i) {
  this._i = 0
};

Ticker.prototype = {
  tick: function() {
    console.log(this._i++);
  }
};

var _i = 100; 
var ticker = new Ticker(_i);
setInterval(ticker.tick, 1000);
*/


/*
var flipAndInvertImage = function(A) {
    return A.map(ele => ele.reverse().map(e => 1 ^ e))
};
*/


/*
var flipAndInvertImage = function(a) {
  a.forEach((row, i) => {
    a[i] = row.reverse();
    a[i].forEach((e, j) => {
      a[i][j] = a[i][j] ^ 1;
    });
  });
  return a;
};

document.write(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
*/


/*
var spiralMatrix = function(arr) {
  var res;

  if (arr.length == 0) {
    res = "Matrix is empty";
  }



return res;
}

document.write(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));     
*/


/*
var diStringMatch = function(s) {
  var res = [], k = 1;

  for (var i = 0; i < s.length + 1; i++) {
    res[i] = i;
  }

do {
k = 0;
for (var j = 0; j < s.length; j++) {

  if ((s[j] == "I") && (res[j] > res[j + 1])) {
      [res[j], res[j + 1]] = [res[j + 1], res[j]];
      k += 1;
      continue;
    } else  if ((s[j] == "D") && (res[j] < res[j + 1])) {
      [res[j], res[j + 1]] = [res[j + 1], res[j]];
      k += 1;
      continue;
    }
}
} while ( k > 0);

return res;  
}

document.write(diStringMatch("DDI"));
*/


/*
var findTheDifference = function(s, t) {
    var res = "";
    var ss;

    for (var j = 0; j < t.length; j++) {
      ss = s.indexOf(t[j]);

      if (ss > -1) {s = s.slice(0, ss) + s.slice(ss + 1);
      } else {
        res += t[j];
      }
    }

    return(res);
};

document.write(findTheDifference("qwertyuiop", 
"lqwertyuiopzhopa")); 
*/


/*
var moveZeroes = function(nums) {
  var k = 0;

  for (var i = nums.length; i >= 0; i--) {
    if (nums[i] == 0) {
      nums.splice(i,1);
      nums.push(0);
    }
  }

  return nums;
};

document.write(moveZeroes([0,0,1,3,0,3]));
*/


/*
var singleNumber = function(nums) {
  var sch = {};
  var res;

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    sch[num] = sch[num] ? sch[num] + 1 : 1;
  }
  
  for (num in sch) {
    if (sch[num] == 1)
      res = num;
  }

  return res;
};

document.write(singleNumber([2,1,2])); //4
*/


/*
var majorityElement = function(nums) {
  var s = {};
  var n = Math.floor(nums.length / 2);
  var res;

  for(var i = 0; i < nums.length; i++) {
    var num = nums[i];
    s[num] = s[num] ? s[num] + 1 : 1;
  } 

  for (num in s) {
    if (s[num] > n)
      res = num;
  }

  return res;
};

document.write(majorityElement([3,2,3]));
*/


/*
var isMonotonic = function(a) {
  var res;

  for (var i = 1; i < a.length; i++) {
    if (a[i] > a[i-1]) {
      if (res == 2) return false;
      res = 1;
    } else if (a[i] < a[i-1]) {
      if (res == 1) return false;
      res = 2;
    }
  }

  return true;
};

document.write(isMonotonic([1,3,2]));
*/


/*
var getSum = function(a, b) {
  if (a > 0) {
    while (a != 0) {
      b++;
      a--;
    }
  } else {
    while (a != 0) {
      b--;
      a++;
    }
  }

  return b;
};

document.write(getSum(1,2));
*/


/*
var obj = {
  name: "Kolya",
  toString: function() {
    return ('IMYA: ' + this.name);
  },
  valueOf: function() {
    return this.name.length;
  }
}

alert(obj + 1);
*/

//????????????????????????????????????
/*
var carrySum = function(a) {
  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  }

  return f;
}


document.write(carrySum("a")(2)(3)(4));
*/


/*
var calculator = {
  run: function() {
    this.a = +prompt("1 chislo", 0);
    this.b = +prompt("2 chislo", 0);
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
}

calculator.run();
alert(calculator.sum());
alert(calculator.mul());
*/


/*
var ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert(this.step);
    return this;
  }
};

ladder.up().up().down().showStep();
*/


/*
var animal = {
  eats: true
}
var rabbit = {
  jump: true
}

rabbit.__proto__ = animal;

document.write(rabbit.eats);//true
*/


/*
var animal = {
  eats: true
}

var rabbit = {
  jump: true,
  __proto__: animal
}

for (var key in rabbit) {
  if (!rabbit.hasOwnProperty(key)) continue;
  document.write(key + " = " + rabbit[key] + "; "); //only jump!!!
}
*/


/*
var data = Object.create(null);
data.text = "salam";

alert(data.text); //salam
alert(data.toString); //undefined
*/


/*
var animal = {
  eats: true
}

 function Rabbit(name) {
  this.name = name;
 }

Rabbit.prototype = animal;

var rabbit = new Rabbit("Krol");

alert(rabbit.eats);
*/


/*
function spiral(arr) {
  let res = 0;
  f = Math.floor(arr.length/2);

  while (i != 0 && j != 0) {
    arr[f]
  }

  return res
}


document.write(spiral([[1,2,3],[4,5,6],[7,8,9]]));
*/


/*
var counter = (function() {
  var mc = 0;

  function change(val) {
    mc +=val;
  }

  return {
    incr: function() {
      change(1);
    },
    decrem: function() {
      change(-1);
    },
    value: function() {
      return mc;
    }
  };
})();

alert(counter.value());//0
counter.incr();
counter.incr();
alert(counter.value());//2
counter.decrem();
alert(counter.value());//1
counter.change(2);
alert(counter.value());//?нельзя так обращаться
*/


/*
var x = 2;
var y = 4;

if ((y>x || y++ === 4) && ++y === 5) {
  x = 1;
} else {
  x = 4;
}

alert(y);//5
*/


/*
function f(x) {
  x += 1;
}

function g(x) {
  x.value *= 5;
}

var a, b = 1, c ={value: 2}, d = c;

f(a);
f(b);
g(d);

alert(a);//undefined
alert(b);//1??????????
alert(c.value); //10 === d.value
*/

/*
alert(typeof a);//fucntion
alert(typeof b);//undefined
//declaration
function a(){

}; 
//expression
var b = function(){

};
alert(typeof b);//function
*/











































