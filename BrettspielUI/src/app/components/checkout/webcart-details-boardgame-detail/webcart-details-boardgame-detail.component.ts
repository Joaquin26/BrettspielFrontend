import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WebcartDetail} from '../../../model/WebcartDetail';

@Component({
    selector: 'app-webcart-details-boardgame-detail',
    templateUrl: './webcart-details-boardgame-detail.component.html',
    styleUrls: ['./webcart-details-boardgame-detail.component.css']
})
export class WebcartDetailsBoardgameDetailComponent implements OnInit {

    @Input()
    webcartDetails: WebcartDetail[];
    @Input()
    rentDays: number;
    @Output()
    getTotalGameboardPrice = new EventEmitter();

    totalGameboardPrice = 0;

    constructor() {
    }

    ngOnInit() {
    }

    updateTotalGameboardPrice() {
        this.totalGameboardPrice = 0;
        for (const webcartDetail of this.webcartDetails) {
            if (webcartDetail.boardGame != null) {
                this.totalGameboardPrice += webcartDetail.quantity * webcartDetail.boardGame.pricePerDay * this.rentDays;
            }
        }
        this.getTotalGameboardPrice.emit(this.totalGameboardPrice);
    }
}
