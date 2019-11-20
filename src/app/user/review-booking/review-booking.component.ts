import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-booking',
  templateUrl: './review-booking.component.html',
  styleUrls: ['./review-booking.component.css']
})
export class ReviewBookingComponent implements OnInit {

    to = '';
    from = '';
    totalPrice = 0;
    private sub: Subscription;
    fl: IFlights[];
    flightList: Array<IFlights> = [];
    time: {
        hours: string;
        min: string;
      };
      timeArray = [];
      fromCity = '';
      toCity = '';
    id = '';
    idArray = [];
          flightCompany: string;
          departureName: string;
          departureTime: string;
          arrivalName: string;
          arrivalTime: string;
          price: number;
          duration: string;
          hours: string;
          mins: string;

          fullname ='';
          address = '';
          mobile = '';
          passengerDetails = {
            fullName: '',
            gender: 'Male',
            address: '',
            mobile: 0
          };
    // tslint:disable-next-line: variable-name
    constructor(private _flightsData: FlightdataService,
                private route: ActivatedRoute) { }
    ngOnInit() {
      this._flightsData.getFlightsData().subscribe(
        (flights: IFlights[]) => {
          this.fl = flights;
          this.sub = this.route.paramMap.subscribe(
            params => {
              this.fullname = params.get('fullName');
              this.address = params.get('address');
              this.mobile =  params.get('mobile');
              this.id = params.get('flightID');
              console.log(this.id);
              console.log(this.fullname);
              this.idArray = this.id.split(':');
              console.log(this.idArray);
              if (this.idArray.length > 1) {
                this.fromCity = this.idArray[0];
                this.toCity = this.idArray[1];
              } else {
                this.fromCity = this.idArray[0];
              }
            }
          );
          this.filterData();
        }
      );
    }
    filterData() {
      console.log('In filter');
      console.log(this.fromCity + ' ' + this.toCity);
      
      this.fl.forEach( f => {
        console.log(f);
        console.log(f.id);
        
        if (f.id === this.fromCity || f.id === this.toCity) {
          console.log('sfd');
          this.flightList.push(f);
          this.totalPrice += f.price;
          console.log(this.flightList);
        }
      });

  }
}
