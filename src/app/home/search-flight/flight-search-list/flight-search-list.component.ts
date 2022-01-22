import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flight-search-list',
  templateUrl: './flight-search-list.component.html',
  styleUrls: ['./flight-search-list.component.scss']
})
export class FlightSearchListComponent implements OnInit {

  flightSearchListValues = [
    {"id" :1 , "name" : 'Indigo'},
    {"id" :2 , "name" : 'Air Asia'},
    {"id" :3 , "name" : 'Vistara'},
    {"id" :4 , "name" : 'Spice jet'}
  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  bookFlightTicket(flight : any) {
      this.router.navigate(["/BookFlight",flight.id])
  }

}
