import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//  showColor: boolean = false;  
  
  constructor() { }  
  
  // public changeColor(): void {  
  //     this.showColor = !this.showColor;  
  // }

  showContent: boolean = false;

  caption : string ="Show Text";
  
  public showText() {
    this.showContent = !this.showContent;

    if (this.showContent) {
      this.caption = "Hide Text";
    }else{
      this.caption = "Show Text";
    }
  }
} 
 

