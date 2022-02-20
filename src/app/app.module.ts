import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavigationMenuComponent } from './components/headers/navigation-menu/navigation-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuMobiComponent } from './components/headers/navigation-menu-mobi/navigation-menu-mobi.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authenticationService } from './services/authenticationService';
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SignInComponent,
    SignUpComponent,
    NavigationMenuComponent,
    NavigationMenuMobiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
