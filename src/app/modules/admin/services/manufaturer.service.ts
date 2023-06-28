import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseResponseModel } from "src/app/models/response-base.model";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn:'root'
})

export class ManfaturerService{
    baseUrl = environment.BASE_BE_URL;
    constructor(private http: HttpClient) { }

    getManufacturers(){
      return  this.http.get<BaseResponseModel<any>>(this.baseUrl+'manufacturer')
    }

    addNewManufacture(input){
      return this.http.post<BaseResponseModel<any>>(this.baseUrl+'manufacturer',input)
    }

    deleteManufacturer(id:string){
      return this.http.get<BaseResponseModel<any>>(`${this.baseUrl}manufacturer/delete/:?id=${id}`)
    }
}