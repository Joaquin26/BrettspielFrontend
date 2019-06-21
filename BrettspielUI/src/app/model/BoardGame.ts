import { Image } from "../model/Image";

export class BoardGame {
    id:number;
    name:String;
    description:String;
    tutorialLink:String;
    available:number;
    stock:number;
    rented:number;
    pricePerDay:number;
    cost:number;
    images:Image[];
}