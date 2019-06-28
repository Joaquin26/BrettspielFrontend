import { User } from './user';
import { BoardGame } from './Boardgame';

export class PlayList {
    id:Number
    name:String
    description:String
    user:User
    boardGames:BoardGame[]
    
}
