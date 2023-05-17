import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn:'root'
})

export class ManfaturerService{
    baseUrl = environment.BASE_BE_URL;
    constructor(private http: HttpClient) { }

    getManufacturers(){
      return  this.http.get<any>(this.baseUrl+'manufacturer')
    }
}