import { product } from "./products";

export class CartModel {
  id!: string;
  user?:string;
  total?:number;
  totalItems?:number;
  active?:boolean;
  processed?:boolean;
  createdDate?: Date;
  modifiedDate?: Date;
  deletedDate?: Date;
  cartItem?: CartItem[];

}

export class CartItem{
  id!: string;
  user!: string;
  product: product | string | any;
  cart!:string;
  qty!:number;
  active!:boolean;
  createdDate!: Date;
  modifiedDate!: Date;
  deletedDate!: Date;
}

export const mapToCartModels = (input:any) => {
    return Object.assign(new CartModel, input);
}
