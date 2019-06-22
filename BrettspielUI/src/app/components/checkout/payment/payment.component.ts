import { Component, OnInit } from '@angular/core';
import {CreditCard} from '../../../model/CreditCard';
import {CreditcardService} from '../../../services/creditcard.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  creditcard: CreditCard = new CreditCard();
  creditcardExists: CreditCard;

  constructor(private creditcardService: CreditcardService) { }

  ngOnInit() {
  }

  saveCreditcard() {
    this.creditcardService.creditCardExistsByNumber(this.creditcard.number)
        .subscribe(creditcardExists => {
          this.creditcardExists = creditcardExists;
          if (this.creditcardExists.id === -1) {
            this.creditcardService.saveCreditcard(this.creditcard)
                .subscribe(datos => console.log(datos), error => console.log(error));
          }
        });
  }
}
