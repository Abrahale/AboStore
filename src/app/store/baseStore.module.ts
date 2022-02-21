import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SignInStoreModule } from "./sign-in/signInStore.module";

@NgModule({
  declarations:[],
  imports:[
    SignInStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  exports:[]
})

export class BaseStoreModule{};
