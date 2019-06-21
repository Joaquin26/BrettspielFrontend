import {BoardGame} from './BoardGame';
import {Snack} from './Snack';
import {Promotion} from './Promotion';

export class WebcartDetail {
    id: number;
    snack: Snack;
    boardGame: BoardGame;
    promotion: Promotion;
    quantity: number;
}
