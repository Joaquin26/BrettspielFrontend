import {Component, OnInit} from '@angular/core';
import { WebcartService } from 'src/app/services/webcart.service';
import { Webcart } from 'src/app/model/Webcart';

@Component({
    selector: 'app-webcart-checkout',
    templateUrl: './webcart-checkout.component.html',
    styleUrls: ['./webcart-checkout.component.css']
})
export class WebcartCheckoutComponent implements OnInit {

    startRentDay: Date;
    endRentDay: Date;

    constructor(private webcartService:WebcartService) {
    }

    ngOnInit() {
    }

    getStartRentDay(ev) {
        this.startRentDay = ev;
    }

    getEndRentDay(ev) {
        this.endRentDay = ev;
    }
    Update()
    {
        var fakewc:Webcart=JSON.parse(localStorage.getItem("carrito"));
        this.webcartService.webcart.next(fakewc)
    }
}
