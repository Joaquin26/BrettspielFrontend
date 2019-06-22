import {Component, Input, OnInit} from '@angular/core';
import {CreditCard} from '../../../model/CreditCard';
import {CreditcardService} from '../../../services/creditcard.service';
import {Bill} from '../../../model/Bill';
import {UserService} from "../../../services/user.service";
import {BillService} from "../../../services/bill.service";

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    creditcard: CreditCard = new CreditCard();
    creditcardExists: CreditCard;
    bill: Bill = new Bill();
    @Input()
    startRentDay: Date;
    @Input()
    endRentDay: Date;

    constructor(private billService: BillService, private creditcardService: CreditcardService, private userService: UserService) {
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
        this.bill.creditCard = this.creditcard;
        this.bill.date = new Date(Date.now());
        this.bill.endRentDay = this.endRentDay;
        this.bill.membershipDiscount = 0;
        this.bill.penalty = 0;
        this.bill.ruc = 0;
        this.bill.startRentDay = this.startRentDay;
        this.bill.status = 'Recoger';
        this.userService.currentUser
            .subscribe(user => this.bill.user = user);

        this.billService.saveBill(this.bill)
            .subscribe();
    }
}
