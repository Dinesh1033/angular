import { Component } from '@angular/core';
import array from "../utils/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  RandomNumber=0;
  Words="";

  generate(){
    this.RandomNumber=Math.floor(Math.random()*20);
    this.Words=array.slice(0, this.RandomNumber).join(" ");
    console.log(this.Words);

  }
  

}
