import Buyable from './Buyable';

export default class Laptop implements Buyable {
    type: string;
    price: number;
    electronicProduct: boolean = false;
    count: number = 1;
    constructor(
        readonly id: number,
        readonly name: string,
        price: number,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = 'laptop';
    }
}
