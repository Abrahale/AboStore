export class product {
  _id!: string;
  productCode!:string;
  title!: string;
  sku!: string;
  category!: string[];
  manufacturer!: string[];
  quantity!:number;
  available!:boolean;
  inventory!: string[];
  price!: number;
  discount!: string[];
  description!: string;
  image!:string[];
  rating!:number;
  createdDate!: Date;
  modifiedDate!: Date;
  deletedDate!: Date;
}

export const mapToProducts=(input:any) => {
    return Object.assign(new product, input);
}
