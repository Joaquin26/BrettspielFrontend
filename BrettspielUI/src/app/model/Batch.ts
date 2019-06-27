import {Snack} from './Snack';

export class Batch {
    id: number;
    snack: Snack;
    snackCost: number;
    expiredDate: Date;
    boughtDate: Date;
}
