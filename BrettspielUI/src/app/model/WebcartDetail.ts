import {BoardGame} from './BoardGame';
import {Snack} from './Snack';
import {Promotion} from './Promotion';
import { Webcart } from './Webcart';

export class WebcartDetail {

    
    id: Number;
    webCart:Webcart;
    snack: Snack;
    boardGame: BoardGame;
    promotion: Promotion;
    quantity: number;
    
}
