export class CartModel {
  id:string
  image:string[]|string;
  price:number;
  title:string;
  quanitity:number;
}

export const mapToCartModels = (input:any) => {
    return Object.assign(new CartModel, input);
}
