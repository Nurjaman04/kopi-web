// sum.test.js
const sum = require('./sum');

test('menjumlahkan 1 + 2 sama dengan 3', () => {
  expect(sum(1, 2)).toBe(3);
});
