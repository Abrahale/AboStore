export class CartModel {
  _id:string
  imagePath:string;
  price:number;
  title:string;
  quanitity:number;
}

export const mapToCartModels = (input:any) => {
    return Object.assign(new CartModel, input);
}
