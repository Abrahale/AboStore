import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CartsReducer } from "./reducer";
import { CartsEffects } from "./effects";
import { CommonModule } from "@angular/common";
import { storeConstants } from "src/app/constants/store-constants";
@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    StoreModule.forFeature(storeConstants.CART, CartsReducer),
    EffectsModule.forFeature([CartsEffects])
  ],
  exports:[],
  providers:[CartsEffects],
})

export class CartsStoreModule{};
