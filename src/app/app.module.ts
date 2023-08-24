
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AuthenticationService } from './services/authenticationService';
import { BaseStoreModule } from './store';
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
import { HttpLoadingInterceptor } from './interceptors/http-loading.interceptor';
import { UsersService } from './services/users.service';
import { ContainersModule } from './containers/containers.module';
import { CartComponent } from './pages/cart/cart.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { AuthGuard } from './Guards/authGuard.guard';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CookieService } from 'ngx-cookie-service';
import { GerenralService } from './services/generalService.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeScreenComponent,
        SidenavMainComponent,
        PageNotFoundComponent,
        CartComponent,
        ProductViewComponent
        //Directives
    ],
    providers: [
        AuthenticationService, 
        ThemeService,
        UsersService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpLoadingInterceptor,
            multi: true,
          },
          CookieService,
          GerenralService
    ],
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
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        ComponentsModule,
        ProductModule,
        CartModule,
        CustomerModule,
        ContainersModule
    ]
})
export class AppModule { }
