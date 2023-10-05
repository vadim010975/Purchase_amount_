import Cart from '../Cart';
import EBook from '../EBook';
import Laptop from '../Laptop';

const cart = new Cart;

test('add e-book, checking the number of objects', () => {
  cart.add(new EBook(101, 'PHP 8', 500));
  cart.add(new EBook(101, 'PHP 8', 500));
  const result = cart.items.reduce((count, item) => {
    if (item.id === 101) {
      count += 1;
    }
   return count; 
  }, 0);
  expect(result).toBe(1);
});

test('add e-book, checking the count property', () => {
  const result = cart.items.find(item => item.id === 101)?.count;
  expect(result).toBe(1);
});

test('add laptop, checking the count property', () => {
  cart.add(new Laptop(102, 'ASUS', 50000));
  cart.add(new Laptop(102, 'ASUS', 50000));
  const result = cart.items.find(item => item.id === 102)?.count;
  expect(result).toBe(2);
});

test('reduced laptop, checking the count property', () => {
  cart.reduce(102);
  const result = cart.items.find(item => item.id === 102)?.count;
  expect(result).toBe(1);
});

test('reduced last laptop, checking the count property', () => {
  cart.reduce(102);
  const result = cart.items.findIndex(item => item.id === 102);
  expect(result).toBe(-1);
});