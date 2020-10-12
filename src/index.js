module.exports = function reverse (n) {
  let sorted = Math.abs(n).toString().split('').reverse().join('');
  return +sorted;
}
