import {Bill} from './Bill';
import {Batch} from './Batch';
import {Promotion} from './Promotion';

export class BillDetail {
    id: number;
    bill: Bill;
    batch: Batch;
    promotion: Promotion;
    quantity: number;
    priceSnacks: number;
    constructor(batch: Batch, quantity: number, priceSnacks: number) {
        this.id = undefined;
        this.bill = undefined;
        this.batch = batch;
        this.promotion = undefined;
        this.quantity = quantity;
        this.priceSnacks = priceSnacks;
    }
}
