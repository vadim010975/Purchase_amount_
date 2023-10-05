import Buyable from './Buyable';

export default class EBook implements Buyable {
    type: string;
    price: number;
    electronicProduct: boolean = true;
    count: number = 1;
    constructor(
        readonly id: number,
        readonly name: string,
        price: number,
    ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = 'eBook';
    }
}
