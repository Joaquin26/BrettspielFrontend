import {Component, Input, OnInit} from '@angular/core';
import {WebcartDetail} from '../../../model/WebcartDetail';

@Component({
  selector: 'app-webcart-details-boardgame-detail',
  templateUrl: './webcart-details-boardgame-detail.component.html',
  styleUrls: ['./webcart-details-boardgame-detail.component.css']
})
export class WebcartDetailsBoardgameDetailComponent implements OnInit {

  @Input()
  webcartDetails: WebcartDetail[];
  @Input()
  rentDays: number;

  constructor() { }

  ngOnInit() {
  }

}
