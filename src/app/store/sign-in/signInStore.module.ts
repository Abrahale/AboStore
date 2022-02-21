import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SignInReducer } from "./reducer";
import { SignInEffects } from "./effects";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    StoreModule.forFeature('sign-in', SignInReducer),
    EffectsModule.forFeature([SignInEffects])
  ],
  exports:[],
  providers:[SignInEffects],
})

export class SignInStoreModule{};
