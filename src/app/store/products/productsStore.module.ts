import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ProductsReducer } from "./reducer";
import { ProductsEffects } from "./effects";
import { CommonModule } from "@angular/common";
import { storeConstants } from "src/app/constants/store-constants";
@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    StoreModule.forFeature(storeConstants.PRODUCTS, ProductsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports:[],
  providers:[ProductsEffects],
})

export class ProductsStoreModule{};
