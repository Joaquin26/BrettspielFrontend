import {Component, OnInit} from '@angular/core';
import {Bill} from '../../../model/Bill';

@Component({
    selector: 'app-webcart-checkout',
    templateUrl: './webcart-checkout.component.html',
    styleUrls: ['./webcart-checkout.component.css']
})
export class WebcartCheckoutComponent implements OnInit {

    bill: Bill;

    constructor() {
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        /*this.bill = {
            creditCard: {
                id: 2625,
                name: 'diego',
                number: 52665161,
                cvv: 234,
                expiration: new Date('2021-05'),
            },
            date: new Date('2019-02-15'),
            endRentDay: new Date('2019-02-19'),
            id: 51545,
            membershipDiscount: 0,
            // Que era bill penalty?
            penalty: 0,
            ruc: 0,
            startRentDay: new Date('2019-02-16'),
            status: '',
            user: {
                id: 2,
                username: 'diego',
                password: 'diego',
                name: 'Diego',
                email: 'diego@gmail.com',
                reputation: 0,
                membershipId: 1,
                membership: null
            }
        };*/
    }
}
