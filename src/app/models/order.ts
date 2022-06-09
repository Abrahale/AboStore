import { CartModel } from './cartModel';
export class Order {
    id: number;
    orderDate: Date;
    orderTotal: number;
    shoppingItem: CartModel[];

    constructor() {
        this.id = null;
        this.orderDate = null;
        this.orderTotal = null;
        this.shoppingItem = [];
    }
}
