import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SignInStoreModule } from "./sign-in/signInStore.module";
import { ProductsStoreModule } from "./products";

@NgModule({
  declarations:[],
  imports:[
    SignInStoreModule,
    ProductsStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  exports:[]
})

export class BaseStoreModule{};
