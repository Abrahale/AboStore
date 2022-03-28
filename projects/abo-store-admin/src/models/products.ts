export class product {
  available:boolean;
  category:string;
  createdDate:Date;
  description:string;
  imagePath:string;
  manufacturer:string;
  modifiedDate:string;
  price:number;
  productCode:string;
  title:string;
  _id:string
}

export const mapToProducts=(input:any) => {
    return Object.assign(new product, input);
}
