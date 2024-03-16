// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

//solution 1
function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('Olaleye'));

//solution 2
// function reverse(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }
// console.log(reverse('Olaleye'));
