import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WebcartDetail} from '../../../model/WebcartDetail';
import { WebcartService } from 'src/app/services/webcart.service';
import { Webcart } from 'src/app/model/Webcart';

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

    constructor(private webcartService:WebcartService) {
    }


    ngOnInit() {
        this.webcartService.currentWebcart.subscribe(data=>this.webcartDetails=data.webCartDetails)
        this.getTotalSnackPrice.emit(this.totalSnackPrice);
    }

    updateTotalSnackPrice() {
        this.totalSnackPrice = 0;
        for (const webcartDetail of this.webcartDetails) {
            if (webcartDetail.snack != null) {
                this.totalSnackPrice += webcartDetail.quantity * webcartDetail.snack.price;
            }
        }
        var fakewb=new Webcart();
        this.webcartService.currentWebcart.subscribe(data=>fakewb=data)
        fakewb.webCartDetails=this.webcartDetails;
        this.webcartService.webcart.next(fakewb);
        localStorage.removeItem("carrito");
        localStorage.setItem("carrito",JSON.stringify(fakewb));
        this.getTotalSnackPrice.emit(this.totalSnackPrice);
    }

    deleteWebcartDetailById(id) {
        for (let i = 0; i < this.webcartDetails.length; i++) {
            if (this.webcartDetails[i].snack!=null && this.webcartDetails[i].snack.id === id) {
                this.webcartDetails.splice(i, 1);
            }
        }
        var fakewb=new Webcart();
        this.webcartService.currentWebcart.subscribe(data=>fakewb=data)
        fakewb.webCartDetails=this.webcartDetails;
        this.webcartService.webcart.next(fakewb);
        localStorage.removeItem("carrito");
        localStorage.setItem("carrito",JSON.stringify(fakewb));
        this.updateTotalSnackPrice();
    }
}
