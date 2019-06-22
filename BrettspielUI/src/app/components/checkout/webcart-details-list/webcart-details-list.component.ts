import {Component, OnInit} from '@angular/core';
import {Webcart} from '../../../model/Webcart';
import {WebcartService} from '../../../services/webcart.service';
import {User} from '../../../model/user';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-webcart-details-list',
    templateUrl: './webcart-details-list.component.html',
    styleUrls: ['./webcart-details-list.component.css']
})
export class WebcartDetailsListComponent implements OnInit {

    startRentDayStr: string;
    endRentDayStr: string;
    startRentDay: Date;
    endRentDay: Date;
    rentDays: number;

    totalSnackPrice = 0;
    totalGameboardPrice = 0;

    webCart: Webcart = new Webcart();
    user: User = new User();

    constructor(private webcartService: WebcartService, private userService: UserService) {
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.userService.currentUser
            .subscribe(user => this.user = user);
        this.webcartService.getBoardGameByUserId(this.user.id)
            .subscribe((webcart => {
                this.webCart = webcart;
                this.loadTotalPrices();
            }));
    }

    loadTotalPrices() {
        this.totalSnackPrice = 0;
        this.totalGameboardPrice = 0;

        for (const webcartDetail of this.webCart.webCartDetails) {
            if (webcartDetail.snack != null) {
                this.totalSnackPrice += webcartDetail.quantity * webcartDetail.snack.price;
            }
            if (webcartDetail.boardGame != null) {
                this.totalGameboardPrice += webcartDetail.quantity * webcartDetail.boardGame.pricePerDay * this.rentDays;
            }
        }
    }

    getTotalSnackPrice(ev) {
        this.totalSnackPrice = ev;
    }

    getTotalGameboardPrice(ev) {
        this.totalGameboardPrice = ev;
    }

    calculateRentDays() {
        if (this.startRentDayStr != null && this.endRentDayStr != null) {
            this.startRentDay = new Date(this.startRentDayStr);
            this.endRentDay = new Date(this.endRentDayStr);

            const dateDiff = this.endRentDay.getTime() - this.startRentDay.getTime();
            this.rentDays = Math.ceil(dateDiff / (1000 * 3600 * 24));

            this.loadTotalPrices();
        }
    }
}



