import EBook from './EBook';

export default class Movie extends EBook {
  constructor(
    readonly id: number,
    readonly name: string,
    price: number,
  ) {
    super(id, name, price);
    this.type = 'Movie';
  }
}
