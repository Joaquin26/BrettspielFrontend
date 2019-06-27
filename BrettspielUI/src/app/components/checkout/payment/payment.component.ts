import {Component, Input, OnInit} from '@angular/core';
import {CreditCard} from '../../../model/CreditCard';
import {CreditcardService} from '../../../services/creditcard.service';
import {UserService} from '../../../services/user.service';
import {BillService} from '../../../services/bill.service';
import {DatePipe} from '@angular/common';
import {Webcart} from '../../../model/Webcart';
import {WebcartService} from '../../../services/webcart.service';
import {User} from '../../../model/user';
import {BoardgameService} from '../../../services/boardgame.service';
import {SnackService} from '../../../services/snack.service';
import {CopyService} from '../../../services/copy.service';
import {BillDetail} from '../../../model/BillDetail';
import {BillCopyDetail} from '../../../model/BillCopyDetail';
import {BatchService} from '../../../services/batch.service';
import {Bill} from '../../../model/Bill';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css'],
    providers: [DatePipe]
})
export class PaymentComponent implements OnInit {

    creditcard: CreditCard = new CreditCard();
    webcart: Webcart;
    user: User;
    billCopyDetails: BillCopyDetail[] = [];
    billDetails: BillDetail[] = [];
    @Input()
    startRentDay: Date;
    @Input()
    endRentDay: Date;

    constructor(private datePipe: DatePipe,
                private billService: BillService,
                private creditcardService: CreditcardService,
                private userService: UserService,
                private webcartService: WebcartService,
                private boardgameService: BoardgameService,
                private snackService: SnackService,
                private copyService: CopyService,
                private batchService: BatchService) {
    }

    ngOnInit() {
        this.loadWebcart();
    }

    loadWebcart() {
        this.webcartService.currentWebcart
            .subscribe((webcart => {
                this.webcart = webcart;
            }));
        this.userService.currentUser
            .subscribe((user => {
                this.user = user;
            }));
    }

    finishCheckout() {
        this.updateBoardgamesSnacks();
        // this.createBill();
    }

    updateBoardgamesSnacks() {
        for (const webcartDetail of this.webcart.webCartDetails) {
            // if (webcartDetail.boardGame != null) {
            //     this.copyService.selectLimitAvailableByBoardGameId(webcartDetail.boardGame.id, webcartDetail.quantity)
            //         .subscribe((copies => {
            //             for (const copy of copies) {
            //                 this.billCopyDetails.push(new BillCopyDetail(copy));
            //                 copy.available = false;
            //                 this.copyService.updateCopyById(copy).subscribe();
            //             }
            //
            //             webcartDetail.boardGame.available -= webcartDetail.quantity;
            //             webcartDetail.boardGame.rented += webcartDetail.quantity;
            //             this.boardgameService.updateBoardgameById(webcartDetail.boardGame).subscribe();
            //         }));
            // }
            if (webcartDetail.snack != null) {
                this.batchService.selectBySnackId(webcartDetail.snack.id)
                    .subscribe((batch => {
                        this.billDetails.push(new BillDetail(
                            batch,
                            webcartDetail.quantity,
                            webcartDetail.snack.price * webcartDetail.quantity
                        ));

                        // webcartDetail.snack.stock -= webcartDetail.quantity;
                        // this.snackService.updateSnackById(webcartDetail.snack).subscribe();
                    }));
            }
        }
    }

    createBill() {
        this.billService.saveBill(
            {
                id: undefined,
                user: this.user,
                creditCard: this.creditcard,
                date: new Date(Date.now()),
                status: 'Paid',
                ruc: 0,
                penalty: 0,
                membershipDiscount: 0,
                startRentDayDate: this.startRentDay,
                endRentDayDate: this.endRentDay,
                billDetails: this.billDetails,
                billCopyDetails: this.billCopyDetails
            } as Bill
        ).subscribe();
    }
}
