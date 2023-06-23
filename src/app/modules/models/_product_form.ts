
export interface IProductForm{
    id:string,
    title:string,
    productCode:string,
    description:string,
    price:string,
    sku:string,
    image:string[],
    featureList:string[],
    manufacturer:string[],
    category:string[],
    department:string[],
    available:boolean,
    quantity:number
  }
  
  export class ProductForm implements IProductForm{
    id:string
    title: string
    productCode: string
    description: string
    price: string
    sku: string
    image:string[]
    featureList: string[]
    manufacturer: string[]
    category: string[]
    department: string[]
    available: boolean
    quantity:number
    
    // constructor(data?: Partial<IProductForm>) {
    //   if (data) {
    //     Object.keys(data).forEach(key => {
    //       (this as any)[key] = data[key];
    //     });
    //   }
    // }

    constructor(data?: Partial<IProductForm>) {
        if (data) {
          Object.assign(this, data);
        }
      }
  
    updateProperties(data: Partial<IProductForm>): void {
      Object.assign(this, data);
    }
  }