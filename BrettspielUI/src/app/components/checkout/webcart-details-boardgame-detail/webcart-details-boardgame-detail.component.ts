import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WebcartDetail} from '../../../model/WebcartDetail';
import { WebcartService } from 'src/app/services/webcart.service';

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

    constructor(private webcartService:WebcartService) {
        
    }

    ngOnInit() {
        this.webcartService.currentWebcart.subscribe(data=>this.webcartDetails=data.webCartDetails)
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

    deleteWebcartDetailById(id) {
        for (let i = 0; i < this.webcartDetails.length; i++) {
            if (this.webcartDetails[i].id === id) {
                this.webcartDetails.splice(i, 1);
            }
        }

        this.updateTotalGameboardPrice();
    }
}
