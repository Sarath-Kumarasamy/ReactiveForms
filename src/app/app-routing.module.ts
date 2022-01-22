import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchFormComponent } from './flight-search-form/flight-search-form.component';
import { HomeComponent } from './home/home.component';
import { FlightSearchListComponent } from './home/search-flight/flight-search-list/flight-search-list.component';
import { SearchFlightComponent } from './home/search-flight/search-flight.component';

const routes: Routes = [
  {path : "SearchFlight", component : SearchFlightComponent},
  {path : "BookFlight" , component : FlightSearchListComponent},
  {path : "BookFlight/:id", component : FlightSearchFormComponent},

  {path : "ViewTicket", component : FlightSearchFormComponent},

  {path : "**", component : HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
