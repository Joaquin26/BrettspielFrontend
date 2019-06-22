import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';
import { Snack } from 'src/app/model/Snack';
import { WebcartDetailService } from 'src/app/services/webcartDetail.service';
import { WebcartService } from 'src/app/services/webcart.service';
import { Webcart } from 'src/app/model/Webcart';
import { WebcartDetail } from 'src/app/model/WebcartDetail';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {

  snacks:Snack[];
  webcart:Webcart;
  constructor(private snackService:SnackService,private webcartService:WebcartService,
    private webcartDetailService:WebcartDetailService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.snackService.getSnackList().subscribe(snacks=> this.snacks=snacks);
    // this.snackService.getSnackList()
    //   .subscribe(snacks => this.snacks = snacks);
  }
  addSnack(snack:Snack){
    
     this.webcartService.currentWebcart.subscribe(webcart=>this.webcart=webcart)
     var wbd:WebcartDetail=new WebcartDetail();
     wbd.snack=snack;
     wbd.quantity=1;
     var fakewb:Webcart=new Webcart()
     fakewb.id=this.webcart.id;
     wbd.webCart=fakewb;
     var webcart:Webcart=JSON.parse(localStorage.getItem("carrito"));
     webcart.webCartDetails.push(wbd)
     localStorage.removeItem("carrito")
     localStorage.setItem("carrito",JSON.stringify(webcart))
     this.webcartService.webcart.next(webcart)
  }

}
