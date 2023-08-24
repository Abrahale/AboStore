import jwtDecode from "jwt-decode";
import { Injectable } from "@angular/core";
import { BaseStoreState, SignInActions } from "../store";
import { Store } from "@ngrx/store";

@Injectable({
    providedIn:'root'
  })
  export class GerenralService {
      constructor(private store$:Store<BaseStoreState.State>) { }
      
      authRefresh(token:string){
        const currentTimestamp = Math.floor(Date.now() / 1000); 
        let decodedT = jwtDecode(token);
        if (currentTimestamp <= decodedT['exp']) {
            this.store$.dispatch(new SignInActions.SessionRefresh(decodedT['id']))
        } 
    }
  }