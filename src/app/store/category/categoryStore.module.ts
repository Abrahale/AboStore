import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CategoryReducer } from "./reducer";
import { CategoryEffects } from "./effects";
import { CommonModule } from "@angular/common";
import { storeConstants } from "src/app/constants/store-constants";
@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    StoreModule.forFeature(storeConstants.CATEGORY, CategoryReducer),
    EffectsModule.forFeature([CategoryEffects])
  ],
  exports:[],
  providers:[CategoryEffects],
})

export class CategoryStoreModule{};
