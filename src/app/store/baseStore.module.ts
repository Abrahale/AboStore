import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SignInStoreModule } from "./sign-in/signInStore.module";
import { ProductsStoreModule } from "./products";
import { CartsStoreModule } from "./cart/cartsStore.module";
import { CategoryStoreModule } from "./category";
import { DepartmentStoreModule } from "./department";
import { UsersStoreModule } from "./users";

@NgModule({
  declarations:[],
  imports:[
    SignInStoreModule,
    ProductsStoreModule,
    CartsStoreModule,
    CategoryStoreModule,
    DepartmentStoreModule,
    UsersStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  exports:[]
})

export class BaseStoreModule{};
