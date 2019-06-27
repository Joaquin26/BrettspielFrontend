import {Bill} from './Bill';
import {Promotion} from './Promotion';
import {Copy} from './Copy';

export class BillCopyDetail {
    id?: number;
    bill?: Bill;
    copy: Copy;
    promotion?: Promotion;
    constructor(copy: Copy) {
        this.id = undefined;
        this.bill = undefined;
        this.copy = copy;
        this.promotion = undefined;
    }
}
