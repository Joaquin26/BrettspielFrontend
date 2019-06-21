import {Component, Input, OnInit} from '@angular/core';
import {WebcartDetail} from '../../../model/WebcartDetail';

@Component({
  selector: 'app-webcart-details-snack-detail',
  templateUrl: './webcart-details-snack-detail.component.html',
  styleUrls: ['./webcart-details-snack-detail.component.css']
})
export class WebcartDetailsSnackDetailComponent implements OnInit {

  @Input()
  webcartDetails: WebcartDetail[];

  constructor() { }

  ngOnInit() {
  }
}
