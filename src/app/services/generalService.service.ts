import jwtDecode from "jwt-decode";
import { Injectable } from "@angular/core";
import { BaseStoreState, SignInActions } from "../store";
import { Store } from "@ngrx/store";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn:'root'
  })
  export class GerenralService {
      constructor(private store$:Store<BaseStoreState.State>, private cookieService:CookieService) { }
      
      authRefresh(){
        const authToken = this.cookieService.get('_jtwot')
        const currentTimestamp = Math.floor(Date.now() / 1000); 
        let decodedT = jwtDecode(authToken);
        if (currentTimestamp <= decodedT['exp']) {
            this.store$.dispatch(new SignInActions.SessionRefresh(decodedT['id']))
        } 
    }
  }