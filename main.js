const arr = [1, 3, 4, 6, 7, 10, 22];

const arr2 = arr.map(function(item, index) {
  return item;
});
console.log(arr2);

const newArr = arr.map(function(item, index) {
  return item + index;
});
console.log(newArr);

const sum = arr.reduce(function(item, next) {
  return item + next;
});
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function(item) {
  return item === 22;
});
console.log(find);
