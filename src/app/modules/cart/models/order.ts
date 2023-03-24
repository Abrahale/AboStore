import { CartModel } from './cartModel';
export class Order {
    id: number;
    orderDate: Date;
    orderTotal: number;
    shoppingItem: CartModel[];

    constructor() {
        this.id = 0;
        this.orderDate = new Date;
        this.orderTotal = 0;
        this.shoppingItem = [];
    }
}
