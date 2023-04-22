
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuMobiComponent } from './components/headers/navigation-menu-mobi/navigation-menu-mobi.component';
import { NavigationMenuComponent } from './components/headers/navigation-menu/navigation-menu.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AuthenticationService } from './services/authenticationService';
import { BaseStoreModule } from './store';
import { CardComponent } from './components/containers/card/card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from './services/theme.service';
import { EffectsModule } from '@ngrx/effects';
import { SidenavMainComponent } from './components/widgets/sidenav-main/sidenav-main.component';
import { ComponentsModule } from './modules/components/components.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from './modules/shared/shared.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { CustomerModule } from "./modules/customer/customer.module";
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef } from '@angular/material/dialog';
import { MainComponent } from './components/containers/main/main.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeScreenComponent,
        NavigationMenuComponent,
        NavigationMenuMobiComponent,
        CardComponent,
        SidenavMainComponent,
        PageNotFoundComponent,
        MainComponent,
        //Directives
    ],
    providers: [AuthenticationService, ThemeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        BaseStoreModule,
        EffectsModule.forRoot([]),
        ComponentsModule,
        ProductModule,
        CartModule,
        CustomerModule
    ]
})
export class AppModule { }
