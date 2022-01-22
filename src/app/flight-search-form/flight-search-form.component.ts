import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent implements OnInit {

 flightBookForm : FormGroup;

  constructor (private formBuilder: FormBuilder) {
  this.flightBookForm = new FormGroup({
    userName : new FormControl('', Validators.required),
    emailId : new FormControl('', Validators.required),
    passengersCount : new FormControl('', Validators.required),
    addPassenger : new FormArray([]),
    meal : new FormControl('')    
  });

  
  }

  passengerDetails () : FormGroup {
    return this.formBuilder.group({   
      passengerName : new FormControl('', Validators.required),
        passengerAge : new FormControl('', Validators.required),
        gender : new FormControl('', Validators.required),
        seatNo : new FormControl('', Validators.required)
        })
      }

  get addPassenger() {
    return this.flightBookForm.controls['addPassenger'] as FormArray;
  }

  addPassengers()  {
    console.log("adding passenger to array : ",this.passengerDetails())
    // addPassenger = (<FormArray>this.flightBookForm.controls['addPassenger'])
    this.addPassenger.push(this.passengerDetails());
  }

  get userNamevalidation() {
    return this.flightBookForm.controls['userName'];
 }

 get emailIdvalidation() {
  return this.flightBookForm.controls['emailId'];
}

get passengersCountvalidation() {
  return this.flightBookForm.controls['passengersCount'];
}

get passengerDetailsvalidation() {
  return this.flightBookForm.controls['passengerDetails'];
}

get mealvalidation() {
  return this.flightBookForm.controls['meal'];
}


  ngOnInit(): void {
  }

  displayForm() {
    console.log(this.flightBookForm);
  }

}
