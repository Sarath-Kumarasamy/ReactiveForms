import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  searchFlightForm : FormGroup
  constructor(private router : Router) { 
    this.searchFlightForm = new FormGroup({
        sourcePlace : new FormControl('',Validators.required),
        destinationPlace : new FormControl('',Validators.required),
        date : new FormControl('',Validators.required)
    })
  }

  loadFlights() {
    this.router.navigate(["BookFlight"])
  }

  ngOnInit(): void {
  }
    
  get sourcePlaceValidation() {
    return this.searchFlightForm.controls['sourcePlace']
  }

  get destinationPlaceValidation() {
    return this.searchFlightForm.controls['destinationPlace']
  }

  get dateValidation() {
    return this.searchFlightForm.controls['date']
  }

}
