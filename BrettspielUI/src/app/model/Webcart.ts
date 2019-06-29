import {WebcartDetail} from './WebcartDetail';

export class Webcart {
    id: number;
    status: string;
    createdDate:  Date;
    cancelledDate:  Date;
    lastSeenDate:  Date;
    webCartDetails: WebcartDetail[];
    public Webcart(){
        this.webCartDetails=new Array<WebcartDetail>();
    }
}
