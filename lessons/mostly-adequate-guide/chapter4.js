var words = (str) => str.split(' ');
var sentences = (arr) => arr.map(words);

console.log(sentences(["Jingle bells Batman smells", "Robin laid an egg"]));

const match = (what) => (str) => str.match(what);
const filterQs = (xs) => xs.filter(match(/q/i));

console.log(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']));

const max = (xs) => xs.reduce((x, y) => (x > y) ? x : y);

console.log(max([323, 523, 554, 123, 5234]) === 5234);

const slice = (start) => (end) => (arr) => arr.slice(start, end);

var take = (n) => (arr) => slice(0)(2)(arr);
var take2 = take(2);

console.log(take2(['a', 'b', 'c']));
