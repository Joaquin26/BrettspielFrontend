import {BoardGame} from './BoardGame';
import {Snack} from './Snack';
import {Promotion} from './Promotion';
import { Webcart } from './Webcart';

export class WebcartDetail {

    
    id: Number;
    snack: Snack = new Snack();
    boardGame: BoardGame = new BoardGame();
    promotion: Promotion = new Promotion();
    quantity: number;
    webCart:Webcart;
}
