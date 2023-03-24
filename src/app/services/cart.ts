import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartItem } from '../modules/cart/models/cartModel';
@Injectable({
  providedIn:'root'
})
export class CartService {
  baseUrl = environment.BASE_BE_URL;

  //some configurations for related to cart
  private _cartDropdown: 'open'|'close' = 'close';

  get cartDropdown(){return this._cartDropdown == 'open'}
    toggleCartDropdown(status?: 'open'| 'close'):void{
    if(!status){
      this._cartDropdown = this._cartDropdown === 'open' ? 'close': 'open'
    }
    else{
      this._cartDropdown = status
    }
  }
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
    return this.http.post<any>(`${this.baseUrl}cart/add-to-cart`,payload);
  }

  updateCart({}){
    return this.http.post<any>(`${this.baseUrl}products`,{});
  }

  updateCartQty(payload:{cartId:string,product_id:string,cartItem_id:string,inc:boolean}){
    return this.http.post<any>(`${this.baseUrl}cart/updateQty`,{cartId:payload.cartId,product_id:payload.product_id,cartItem_id:payload.cartItem_id,inc:payload.inc});
  }

  removeCartItem(payload:{cartId:string,product_id:string,cartItem_id:string,remove:boolean}){
    return this.http.post<any>(`${this.baseUrl}cart/remove-from-cart`,{cartId:payload.cartId,product_id:payload.product_id,cartItem_id:payload.cartItem_id,remove:payload.remove});
  }

}
