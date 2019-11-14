import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCard, MatCardModule, MatRadioButton, MatRadioModule, MatTableModule} from '@angular/material';
import { LoginComponent } from './user/login/login.component';

import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FlightListComponent } from './user/flight-list/flight-list.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { SearchListComponent } from './user/search-list/search-list.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AddnewflightComponent } from './admin/addnewflight/addnewflight.component';
import { ReviewBookingComponent } from './user/review-booking/review-booking.component';
import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';
import { UniquePipe } from './unique.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminhomeComponent,
    LoginComponent,
    FooterComponent,
    SearchFlightsComponent,
    ProfileComponent,
    FlightListComponent,
    ViewProfileComponent,
    SearchListComponent,
    RegistrationComponent,
    AddnewflightComponent,
    ViewProfileComponent,
    SearchListComponent,
    RegistrationComponent,
    AddnewflightComponent,
    ReviewBookingComponent,
    AirlinelistcomponentComponent,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
