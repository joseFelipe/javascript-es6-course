"use strict";

var arr = [1, 3, 4, 6, 7, 10, 22];
var arr2 = arr.map(function (item, index) {
  return item;
});
console.log(arr2);
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (item, next) {
  return item + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 22;
});
console.log(find);
