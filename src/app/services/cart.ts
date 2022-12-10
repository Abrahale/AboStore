import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cartModel';
@Injectable({
  providedIn:'root'
})
export class CartService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  checkOut(){
    return this.http.get<any>(`${this.baseUrl}products`);
  }

  getCart(id:string){
    return this.http.post<any>(`${this.baseUrl}cart/id`,{id});
  }

  addToCart(userId:string, cartId:string, cartItem:CartItem){
    const payload={
      ...cartItem,
      user:userId,
      cart:cartId
    }
    console.log(payload)
    return this.http.post<any>(`${this.baseUrl}cart-item`,payload);
  }

  updateCart({}){
    return this.http.post<any>(`${this.baseUrl}products`,{});
  }

  updateCartQty(payload:{cartId:string,product_id:string,cartItem_id:string,inc:boolean}){
    return this.http.post<any>(`${this.baseUrl}cart-item/updateQty`,{cartId:payload.cartId,product_id:payload.product_id,cartItem_id:payload.cartItem_id,inc:payload.inc});
  }

}
