import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
@Injectable({
  providedIn:'root'
})
export class ProductService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(`${this.baseUrl}products`);
  }
}
