import { HttpClient } from '@angular/common/http'
import { Injectable} from '@angular/core'
import { environment as env } from 'src/environments/environment'
@Injectable({
        providedIn:'root'
})

export class AdminProductService {
     baseUrl = env.BASE_BE_URL;

    constructor(private http:HttpClient){}

    getAllProducts(){
        return this.http.get<any>(`${this.baseUrl}products`);
    }

    addNewProduct(input:any){
        return this.http.post<any>(`${this.baseUrl}products`,{...input})
    }

    updateProduct(input:any){
        return this.http.post<any>(`${this.baseUrl}products/update`,{...input})
    }

    removeProduct(id:string){
        return this.http.get<any>(`${this.baseUrl}products/delete/:?id=${id}`)
      }
}