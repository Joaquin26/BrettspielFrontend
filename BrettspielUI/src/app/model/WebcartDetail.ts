import {BoardGame} from './BoardGame';
import {Snack} from './Snack';
import {Promotion} from './Promotion';

export class WebcartDetail {
    id: number;
    snack: Snack = new Snack();
    boardGame: BoardGame = new BoardGame();
    promotion: Promotion = new Promotion();
    quantity: number;
}
