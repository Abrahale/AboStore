import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UsersReducer } from "./reducer";
import { UsersEffects } from "./effects";
import { CommonModule } from "@angular/common";
import { storeConstants } from "src/app/constants/store-constants";
@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    StoreModule.forFeature(storeConstants.USERS, UsersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports:[],
  providers:[UsersEffects],
})

export class UsersStoreModule{};
