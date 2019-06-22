import {Component, Input, OnInit} from '@angular/core';
import {CreditCard} from '../../../model/CreditCard';
import {CreditcardService} from '../../../services/creditcard.service';
import {Bill} from '../../../model/Bill';
import {UserService} from '../../../services/user.service';
import {BillService} from '../../../services/bill.service';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css'],
    providers: [DatePipe]
})
export class PaymentComponent implements OnInit {

    creditcard: CreditCard = new CreditCard();
    creditcardExists: CreditCard;
    bill: Bill = new Bill();
    @Input()
    startRentDay: Date;
    @Input()
    endRentDay: Date;

    constructor(private datePipe: DatePipe,
                private billService: BillService,
                private creditcardService: CreditcardService,
                private userService: UserService) {
    }

    ngOnInit() {
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
            endRentDay: this.datePipe.transform(this.endRentDay, 'dd/MM/yyyy'),
            membershipDiscount: 0,
            penalty: 0,
            ruc: 0,
            startRentDay: this.datePipe.transform(this.startRentDay, 'dd/MM/yyyy'),
            status: 'Recoger',
            user: {
                id: 0
            }
        };
        this.userService.currentUser
            .subscribe(user => x.user.id = user.id);
        this.creditcardService.creditCardExistsByNumber(this.creditcard.number)
            .subscribe(creditcard => x.creditCard.id = creditcard.id);

        console.log(x);

        this.billService.saveBill(x)
            .subscribe();
    }
}
