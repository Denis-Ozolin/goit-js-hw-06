const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shuffle = (arr) =>
    arr.sort((item, index) => (item[index.Math.random()] > 0.5));

console.log(shuffle(numbers));
