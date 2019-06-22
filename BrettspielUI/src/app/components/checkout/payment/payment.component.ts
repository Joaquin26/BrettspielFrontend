import { Component, Input, OnInit } from '@angular/core';
import { CreditCard } from '../../../model/CreditCard';
import { CreditcardService } from '../../../services/creditcard.service';
import { UserService } from '../../../services/user.service';
import { BillService } from '../../../services/bill.service';
import { DatePipe } from '@angular/common';
import {Webcart} from '../../../model/Webcart';
import {WebcartService} from '../../../services/webcart.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css'],
    providers: [DatePipe]
})
export class PaymentComponent implements OnInit {

    creditcard: CreditCard = new CreditCard();
    creditcardExists: CreditCard;
    webcart: Webcart;
    @Input()
    startRentDay: Date;
    @Input()
    endRentDay: Date;

    constructor(private datePipe: DatePipe,
                private billService: BillService,
                private creditcardService: CreditcardService,
                private userService: UserService,
                private webcartService: WebcartService) {
    }

    ngOnInit() {
        this.loadWebcart();
    }

    loadWebcart() {
        this.webcartService.currentWebcart
            .subscribe((webcart => {
                this.webcart = webcart;
            }));
    }

    finishCheckout() {
        // this.updateBoardgamesSnacks();
        this.saveCreditcard();
        this.createBill();
        // this.saveWebcart();
    }

    updateBoardgamesSnacks() {
        for (const webcartDetail of this.webcart.webCartDetails) {
            if (webcartDetail.boardGame != null) {
                webcartDetail.boardGame.available -= webcartDetail.quantity;
                webcartDetail.boardGame.rented += webcartDetail.quantity;
            }
            if (webcartDetail.snack != null) {
                webcartDetail.snack.stock -= webcartDetail.quantity;
            }
        }
    }

    saveCreditcard() {
        this.creditcardService.creditCardExistsByNumber(this.creditcard.number)
            .subscribe(creditcardExists => {
                this.creditcardExists = creditcardExists;
                if (this.creditcardExists.id === -1) {
                    this.creditcardService.saveCreditcard(this.creditcard)
                        .subscribe();
                } else {
                    this.creditcard.id = this.creditcardExists.id;
                }
                this.createBill();
            });
    }

    createBill() {
        const x = {
            creditCard: {
                id: 0
            },
            date: this.datePipe.transform(new Date(Date.now()), 'dd/MM/yyyy'),
            endRentDayDate: this.datePipe.transform(this.endRentDay, 'dd/MM/yyyy'),
            membershipDiscount: 0,
            penalty: 0,
            ruc: 0,
            startRentDayDate: this.datePipe.transform(this.startRentDay, 'dd/MM/yyyy'),
            status: 'Recoger',
            user: {
                id: 0
            }
        };
        this.userService.currentUser
            .subscribe(user => x.user.id = user.id);

        this.creditcardService.creditCardExistsByNumber(this.creditcard.number)
            .subscribe(creditcard => {
                x.creditCard.id = creditcard.id;
                this.billService.saveBill(x)
                    .subscribe();
            }
            );
    }

    saveWebcart() {
        this.webcart.cancelledDate = this.datePipe.transform(new Date(Date.now()), 'dd/MM/yyyy');
        this.webcartService.webcart.next(this.webcart);
        this.webcartService.saveWebcart(this.webcart);
    }
}
