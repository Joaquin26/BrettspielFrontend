import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../../model/Bill';
import {Webcart} from '../../../model/Webcart';
import {WebcartService} from '../../../services/webcart.service';

@Component({
  selector: 'app-webcart-details-list',
  templateUrl: './webcart-details-list.component.html',
  styleUrls: ['./webcart-details-list.component.css']
})
export class WebcartDetailsListComponent implements OnInit {

  @Input()
  bill: Bill;
  rentDays: number;
  webCart: Webcart;

  constructor(private webcartService: WebcartService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const dateDiff = this.bill.endRentDay.getTime() - this.bill.startRentDay.getTime();
    this.rentDays = Math.ceil(dateDiff / (1000 * 3600 * 24));
    this.webcartService.getWebcartByUserId(this.bill.user.id)
        .subscribe((webcart => this.webCart = webcart));
  }
}



