import Cart from './Cart';
import EBook from './EBook';
import Laptop from './Laptop';
import Movie from './Movie';
import MusicProduct from './MusicProduct';
import Smartphone from './Smartphone';

const cart = new Cart;

cart.add(new EBook(101, 'PHP 8', 500));
cart.add(new Laptop(102, 'ASUS', 50000));
cart.add(new Movie(103, 'Мстители', 100));
cart.add(new MusicProduct(104, 'Michael Jackson', 70));
cart.add(new Smartphone(105, 'Samsung', 25000));
cart.add(new MusicProduct(104, 'Michael Jackson', 70));
cart.add(new Laptop(102, 'ASUS', 50000));
cart.add(new Smartphone(105, 'Samsung', 25000));
cart.add(new Laptop(102, 'ASUS', 50000));

cart.reduce(102);

console.log(cart.items);
