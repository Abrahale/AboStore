import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SignInReducer } from "./reducer";
import { SignInEffects } from "./effects";
import { CommonModule } from "@angular/common";
import { storeConstants } from "src/app/constants/store-constants";
@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    StoreModule.forFeature(storeConstants.SIGN_IN, SignInReducer),
    EffectsModule.forFeature([SignInEffects])
  ],
  exports:[],
  providers:[SignInEffects],
})

export class SignInStoreModule{};
