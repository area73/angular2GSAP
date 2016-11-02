import { Component, OnInit, ViewChild } from '@angular/core';
import "gsap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  timeline = new TimelineMax({ repeat: -1, repeatDelay: 1.5 });
  @ViewChild('box') box;
  
  constructor() {  }

  ngOnInit() { 
    console.log(this.timeline);
  }

  animate(){
      console.log(this.box);
      TweenMax.to(this.box, 5, {left:300});
      console.log(TweenMax);
  }
}
