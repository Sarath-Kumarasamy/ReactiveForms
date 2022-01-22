import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchFormComponent } from './flight-search-form/flight-search-form.component';
import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './home/search-flight/search-flight.component';
import { FlightSearchListComponent } from './home/search-flight/flight-search-list/flight-search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchFormComponent,
    HomeComponent,
    SearchFlightComponent,
    FlightSearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
