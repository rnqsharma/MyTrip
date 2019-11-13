import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { FlightListComponent } from './user/flight-list/flight-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { ReviewBookingComponent } from './user/review-booking/review-booking.component';
import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';


const routes: Routes = [
  {path: 'editprofile', component: ProfileComponent},
  // {path: '', component: ViewProfileComponent},

  {path: 'adminhome', component: AdminhomeComponent},
  {path: '', component: SearchFlightsComponent},
  {path: 'search/:to/:from', component: FlightListComponent},
  {path: 'reviewbooking/:flightID', component: ReviewBookingComponent},

  // {path: '', component: SearchFlightsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'viewprofile', component: ViewProfileComponent},
  {path: 'editprofile', component: ProfileComponent},
  {path: 'airlinelistcomponent/:flightCompany', component: AirlinelistcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ RegistrationComponent, SearchFlightsComponent, LoginComponent];
