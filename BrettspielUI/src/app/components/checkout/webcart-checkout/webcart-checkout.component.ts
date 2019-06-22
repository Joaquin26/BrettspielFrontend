import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-webcart-checkout',
    templateUrl: './webcart-checkout.component.html',
    styleUrls: ['./webcart-checkout.component.css']
})
export class WebcartCheckoutComponent implements OnInit {

    startRentDay: Date;
    endRentDay: Date;

    constructor() {
    }

    ngOnInit() {
    }

    getStartRentDay(ev) {
        this.startRentDay = ev;
    }

    getEndRentDay(ev) {
        this.endRentDay = ev;
    }
}
