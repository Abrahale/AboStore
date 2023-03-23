import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DepartmentReducer } from "./reducer";
import { DepartmentEffects } from "./effects";
import { CommonModule } from "@angular/common";
import { storeConstants } from "src/app/constants/store-constants";
@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    StoreModule.forFeature(storeConstants.DEPARTMENT, DepartmentReducer),
    EffectsModule.forFeature([DepartmentEffects])
  ],
  exports:[],
  providers:[DepartmentEffects],
})

export class DepartmentStoreModule{};
