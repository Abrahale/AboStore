import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuMobiComponent } from './components/headers/navigation-menu-mobi/navigation-menu-mobi.component';
import { NavigationMenuComponent } from './components/headers/navigation-menu/navigation-menu.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AuthenticationService } from './services/authenticationService';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BaseStoreModule } from './store';
import { CardComponent } from './components/containers/card/card.component';
import { ProductViewComponent } from './components/widgets/products/product-view/product-view.component';
import { SliderComponent } from './components/widgets/products/slider/slider.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './components/widgets/products/product-card/product-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavigationMenuComponent,
    NavigationMenuMobiComponent,
    SignInComponent,
    SignUpComponent,
    CardComponent,
    ProductViewComponent,
    SliderComponent,
    CurrencyPipe,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    MatSidenavModule,
    BaseStoreModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
