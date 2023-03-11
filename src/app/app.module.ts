
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuMobiComponent } from './components/headers/navigation-menu-mobi/navigation-menu-mobi.component';
import { NavigationMenuComponent } from './components/headers/navigation-menu/navigation-menu.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AuthenticationService } from './services/authenticationService';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BaseStoreModule } from './store';
import { CardComponent } from './components/containers/card/card.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './components/widgets/products/product-card/product-card.component';
import {CartComponent} from "./pages/cart/cart.component";
import { ThemeService } from './services/theme.service';
import { ButtonComponent } from './components/components/button/button.component';
import { SaleTagComponent } from './components/components/sale-tag/sale-tag.component';
import { HeartTagComponent } from './components/components/heart-tag/heart-tag.component';
import { DiscountTagComponent } from './components/components/discount-tag/discount-tag.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { SidenavMainComponent } from './components/widgets/sidenav-main/sidenav-main.component';
import { CartDropdownDirective } from './Directives/cart-dropdown.directive';
import { ShowHideDirective } from './Directives/show-hide.directive';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavigationMenuComponent,
    NavigationMenuMobiComponent,
    SignInComponent,
    SignUpComponent,
    CardComponent,
    CurrencyPipe,
    ProductCardComponent,
    CartComponent,
    ButtonComponent,
    SaleTagComponent,
    HeartTagComponent,
    DiscountTagComponent,
    SidenavMainComponent,
    //Directives
    CartDropdownDirective,
    ShowHideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    RouterModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    MatSidenavModule,
    BaseStoreModule,
    MatFormFieldModule,
    MatInputModule,
    EffectsModule.forRoot([]),
    ProductModule,
    CartModule,
  ],
  providers: [AuthenticationService,ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
