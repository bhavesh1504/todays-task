import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy,AfterViewInit {

  timeLeft: number = 60;
  timer1:any = 0;
  timer2:any;
  pOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  this.timer1= setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
   this.timer2= setInterval(() => {
          this.pOpened = !this.pOpened;
        
    },6000);

}

ngAfterViewInit(){

}
ngOnDestroy(){
    clearInterval(this.timer1);
    
  
      
}


}

