import { formatCurrency } from '../scripts/utils/money.js';

function runTest(name, actual, expected) {
  if (actual === expected) {
    console.log(`${name}: passed`);
  } else {
    console.log(`${name}: failed (expected '${expected}', got '${actual}')`);
  }
}

runTest('Converts 2095 cents to dollars', formatCurrency(2095), '20.95');
runTest('Works with 0 cents', formatCurrency(0), '0.00');
runTest('Works with 1 cent', formatCurrency(1), '0.01');
runTest('Works with 10 cents', formatCurrency(10), '0.10');
runTest('Works with 100 cents (exactly $1)', formatCurrency(100), '1.00');
runTest('Works with large amount', formatCurrency(1000000), '10000.00');
runTest('Rounds down correctly', formatCurrency(2099), '20.99');
runTest('Handles negative amount', formatCurrency(-500), '-5.00');