# JSMaster
JSMaster — это библиотека помогающая при работе с массивами, объектами и строками.\
**Версия:** 1.2.0 (13.05.2023)
## Методы массивов
### arr.setAt(index, value)
Устанавливает значение элемента с индексом **index** в **value**, при этом поддерживаются отрицательные индексы.
```JavaScript
var arr = [0, 1, 0];
arr.setAt(0, 1); //устанавливает первый элемент в 1
arr.setAt(-1, 1); //устанавливает первый элемент с конца в 1
console.log(arr); //[1, 1, 1]
arr.setAt(-3, 1); //IndexError: index out of range
arr.setAt(4, 1); //IndexError: index out of range
arr.setAt("#", 1); //TypeError: index is not a number
```
### arr.mean(fast)
Возвращает среднее арифметическое от всех чисел в массиве, если их нет, вернёт 0.
```JavaScript
var arr = [1, 5, 3];
console.log(arr.mean()); //3
arr = [1, 5, 3, 6];
console.log(arr.mean()); //3.75
arr = [1, 5, 3, 6, NaN];
console.log(arr.mean()); //3.75
console.log(arr.mean(true)); //NaN
```
### arr.split(size)
Разделяет массив на другие массивы размера **size**.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.split(3)); //[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.split(3)); //[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```
### arr.clear()
Очищает массив.
```JavaScript
var arr = [1, 2];
console.log(arr); //[1, 2]
arr.clear();
console.log(arr); //[]
```
### arr.head()
Возвращает первый элемент массива, который не равен **undefined**.
```JavaScript
var arr = [1, 2];
console.log(arr.head()); //1
arr = [undefined, 1, 2];
console.log(arr.head()); //1
```
### arr.last()
Возвращает первый с конца элемент массива, который не равен **undefined**.
```JavaScript
var arr = [1, 2];
console.log(arr.last()); //2
arr = [1, 2, undefined];
console.log(arr.last()); //2
```
### arr.compact()
Возвращает копию массива, прежде применяя к ней метод **setCompact**.
```JavaScript
var arr = [1, undefined, null, 2, false, "", 3];
console.log(arr.compact()); //[1, 2, 3]
console.log(arr); //[1, undefined, null, 2, false, "", 3]
```
### arr.setCompact()
Удаляет из массива все элементы, которые подобны *false*: **undefined**, **null**, **false**, **0** и т.д.
```JavaScript
var arr = [1, undefined, null, 2, false, "", 3];
arr.setCompact();
console.log(arr); //[1, 2, 3]
```
### arr.difference(...arrays)
Возвращает копию массива, прежде применяя к ней метод **setDifference**.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.difference([3, 4], [6])); //[1, 2, 5, 7]
console.log(arr); //[1, 2, 3, 4, 5, 6, 7]
```
### arr.setDifference(...arrays)
Удаляет из массива все элементы, которые находятся хоть в одном из массивов аргумента **arrays**.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.setDifference([3, 4], [6]);
console.log(arr); //[1, 2, 5, 7]
```
### arr.intersection(...arrays)
Возвращает копию массива, прежде применяя к ней метод **setIntersection**.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.intersection([1, 3, 4, 7], [1, 2, 5, 7, 4])); //[1, 4, 7]
console.log(arr); //[1, 2, 3, 4, 5, 6, 7]
```
### arr.setIntersection(...arrays)
Удаляет из массива все элементы, которые не находятся в каждом из массивов аргумента **arrays**.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.setIntersection([1, 3, 4, 7], [1, 2, 5, 7, 4]);
console.log(arr); //[1, 4, 7]
```
### arr.union(...arrays)
Возвращает копию массива, прежде применяя к ней метод **setUnion**.
```JavaScript
var arr = [1, 2, 3];
console.log(arr.intersection([1, 2, 10], [3, 4, 11])); //[1, 2, 3, 10, 4, 11]
console.log(arr); //[1, 2, 3]
```
### arr.setUnion(...arrays)
Складывает массив и **arrays**, удаляя одинаковые элементы.
```JavaScript
var arr = [1, 2, 3];
arr.setIntersection([1, 2, 10], [3, 4, 11]);
console.log(arr); //[1, 2, 3, 10, 4, 11]
```
### arr.drop(drop)
Возвращает копию массива, прежде применяя к ней метод **setDrop**.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.drop(2)); //[3, 4, 5, 6, 7]
console.log(arr); //[1, 2, 3, 4, 5, 6, 7]
```
### arr.setDrop(drop)
Удаляет **drop** элементов с начала массива.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.setDrop(2);
console.log(arr); //[3, 4, 5, 6, 7]
arr = [1, 2, 3, 4, 5, 6, 7];
arr.setDrop(); //по умолчанию 1
console.log(arr); //[2, 3, 4, 5, 6, 7]
```
### arr.dropRight(drop)
Возвращает копию массива, прежде применяя к ней метод **setDrop**.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.dropRight(2)); //[1, 2, 3, 4, 5]
console.log(arr); //[1, 2, 3, 4, 5, 6, 7]
```
### arr.setDropRight(drop)
Удаляет **drop** элементов с конца массива.
```JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.setDropRight(2);
console.log(arr); //[1, 2, 3, 4, 5]
arr = [1, 2, 3, 4, 5, 6, 7];
arr.setDropRight(); //по умолчанию 1
console.log(arr); //[1, 2, 3, 4, 5, 6]
```
### arr.dropWhile(fun)
Возвращает копию массива, прежде применяя к ней метод **setDropWhile**.
```JavaScript
var arr = [1, 2, 3, 0, 9, 5];
console.log(arr.dropWhile(x => x == 0)); //[0, 9, 5]
console.log(arr); //[1, 2, 3, 0, 9, 5]
```
### arr.setDropWhile(fun)
Удаляет элементы с начала массива, пока **fun** для одного из них не вернёт значение подобное **true**.
```JavaScript
var arr = [1, 2, 3, 0, 9, 5];
arr.setDropWhile(x => x == 0));
console.log(arr); //[0, 9, 5]
arr = [1, 2, 3, 0, 9, 5];
arr.setDropWhile(null); //TypeError: function is not a function
arr.setDropWhile(); //TypeError: function is not a function
arr.setDropWhile("что-то другое"); //TypeError: function is not a function
```
### arr.dropRightWhile(fun)
Возвращает копию массива, прежде применяя к ней метод **setDropWhile**.
```JavaScript
var arr = [1, 2, 3, 0, 9, 5];
console.log(arr.dropWhile(x => x == 0)); //[1, 2, 3, 0]
console.log(arr); //[1, 2, 3, 0, 9, 5]
```
### arr.setDropRightWhile(fun)
Удаляет элементы с конца массива, пока **fun** для одного из них не вернёт значение подобное **true**.
```JavaScript
var arr = [1, 2, 3, 0, 9, 5];
arr.setDropWhile(x => x == 0));
console.log(arr); //[1, 2, 3, 0]
arr = [1, 2, 3, 0, 9, 5];
arr.setDropWhile(null); //TypeError: function is not a function
arr.setDropWhile(); //TypeError: function is not a function
arr.setDropWhile("что-то другое"); //TypeError: function is not a function
```
### arr.toObjcet(fast)
Конвертирует массив пар ключей/значений в объект.
```JavaScript
var arr = [["a", 0], ["b", 1]];
console.log(arr.toObject()); //{ a: 0, b: 1 }
var arr = [["a", 0], ["b", 2], "что-то другое"];
console.log(arr.toObject()); //{ a: 0, b: 2 }
var arr = [["a", 0], ["b", 2], "что-то другое"];
console.log(arr.toObject(true)); //{ a: 0, b: 2, ч: "т" } — некорректная работа
```
### arr.deepFlat()
Возвращает копию массива, прежде применяя к ней метод **setDeepFlat**.
```JavaScript
var arr = [[[[1, 2], 3]], [[[[4], 5]]], [6, 7]];
console.log(arr.deepFlat()); //[1, 2, 3, 4, 5, 6, 7]
console.log(arr); //[[[[1, 2], 3]], [[[[4], 5]]], [6, 7]]
```
### arr.setDeepFlat()
Премениет к массиву метод **flat** с **depth** равным **Infinity**.
```JavaScript
var arr = [[[[1, 2], 3]], [[[[4], 5]]], [6, 7]];
arr.setDeepFlat();
console.log(arr); //[1, 2, 3, 4, 5, 6, 7]
```
### arr.take(take)
Возвращает копию массива, прежде применяя к ней метод **setTake**.
```JavaScript
var arr = [1, 2, 3];
console.log(arr.take(2)); //[1, 2]
console.log(arr); //[1, 2, 3]
```
### arr.setTake(take)
Оставляет **take** элементов с начала массива.
```JavaScript
var arr = [1, 2, 3];
arr.setTake(2);
console.log(arr); //[1, 2]
arr = [1, 2, 3];
arr.setTake(); //по умолчанию 1
console.log(arr); //[1]
```
### arr.takeRight(take)
Возвращает копию массива, прежде применяя к ней метод **setTakeRight**.
```JavaScript
var arr = [1, 2, 3];
console.log(arr.take(2)); //[1, 2]
console.log(arr); //[1, 2, 3]
```
### arr.setTakeRight(take)
Оставляет **take** элементов с конца массива.
```JavaScript
var arr = [1, 2, 3];
arr.setTakeRight(2);
console.log(arr); //[2, 3]
arr = [1, 2, 3];
arr.setTakeRight(); //по умолчанию 1
console.log(arr); //[3]
```
...
## Методы объектов
### obj.freeze(depth)
Запрещает удалять/добавлять/изменять свойства объекта.\
**Осторожно! Это действие нельзя будет отменить.**
```JavaScript
var obj = { a: 0 };
obj.freeze();
obj.a = 1; //в строгом режиме выдаст ошибку
console.log(obj.a); //0 — значение не изменилось
var obj = { a: { a: 0 } };
obj.freeze();
obj.a.a = 1;
console.log(obj.a.a); //1 — значение изменилось
var obj = { a: { a: 0 } };
obj.freeze(2); //"глубина" заморозки — 2
obj.a.a = 1; //в строгом режиме выдаст ошибку
console.log(obj.a.a); //0 — значение не изменилось
```
### obj.deepFreeze()
Аналогичен **freeze** с **depth** равным **Infinity**.
```JavaScript
var obj = { a: { a: { a: { a: { a: 0 } } } } };
obj.deepFreeze();
obj.a.a.a.a.a = 1; //в строгом режиме выдаст ошибку
console.log(obj.a.a.a.a.a); //0 — значение не изменилось
```
### obj.seal(depth)
Запрещает добавлять/удалять свойства объекта.\
**Осторожно! Это действие нельзя будет отменить.**
### obj.deepSeal()
Аналогичен **seal** с **depth** равным **Infinity**.
```JavaScript
var obj = { a: 0, b: 1 };
obj.deepSeal();
delete obj.a; //в строгом режиме выдаст ошибку
a.c = 5; //в строгом режиме выдаст ошибку
console.log(obj.a); //0 — значение осталось
console.log(obj.c); //undefined
```
...