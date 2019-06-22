import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WebcartDetail} from '../../../model/WebcartDetail';

@Component({
    selector: 'app-webcart-details-snack-detail',
    templateUrl: './webcart-details-snack-detail.component.html',
    styleUrls: ['./webcart-details-snack-detail.component.css']
})
export class WebcartDetailsSnackDetailComponent implements OnInit {

    @Input()
    webcartDetails: WebcartDetail[];
    @Output()
    getTotalSnackPrice = new EventEmitter();

    totalSnackPrice = 0;

    constructor() {
    }

    ngOnInit() {
        this.getTotalSnackPrice.emit(this.totalSnackPrice);
    }

    updateTotalSnackPrice() {
        this.totalSnackPrice = 0;
        for (const webcartDetail of this.webcartDetails) {
            if (webcartDetail.snack != null) {
                this.totalSnackPrice += webcartDetail.quantity * webcartDetail.snack.price;
            }
        }
        this.getTotalSnackPrice.emit(this.totalSnackPrice);
    }
}
