import { Image } from "../model/Image";

export class BoardGame {
    id:number;
    name:string;
    description:string;
    tutorialLink:string;
    available:number;
    stock:number;
    rented:number;
    pricePerDay:number;
    cost:number;
    images:Image[];
}