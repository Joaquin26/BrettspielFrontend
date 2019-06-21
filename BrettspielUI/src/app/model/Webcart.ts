import {WebcartDetail} from './WebcartDetail';

export class Webcart {
    id: number;
    status: string;
    createdDate: string;
    cancelledDate: string;
    lastSeenDate: string;
    webCartDetails: WebcartDetail[];
}
