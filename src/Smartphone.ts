import Laptop from './Laptop';

export default class Smartphone extends Laptop {
  constructor(
    readonly id: number,
    readonly name: string,
    price: number,
  ) {
    super(id, name, price);
    this.type = 'Movie';
  }
}
