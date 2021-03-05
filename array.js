const numbers = [1,2];
const names = ['Shan', 'Maddy'];
console.log(numbers, names);

numbers[2] = 3;
names[2] = 'Balu';

numbers.push(4);
names.push('Manoj');

numbers.unshift(0);
names.unshift('John');

numbers.pop();
names.pop();

console.log(Array.isArray(names));

console.log(names.indexOf('Shan'));
