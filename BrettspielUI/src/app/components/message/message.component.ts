import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() show:Boolean;
  @Input() message:String;
  constructor() { }

  ngOnInit() {

  }
  close(){
    this.show=false;
  }

}
