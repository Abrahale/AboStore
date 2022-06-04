import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn:'root'
})
export class CartService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  checkOut(){
    return this.http.get<any>(`${this.baseUrl}products`);
  }
}
