import {CreditCard} from './CreditCard';
import {User} from './user';

export class Bill {
    id: number;
    date: Date;
    startRentDayDate: Date;
    endRentDayDate: Date;
    status: string;
    membershipDiscount: number;
    penalty: number;
    ruc: number;
    user: User;
    creditCard: CreditCard;
}
