import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  logs = [];

  show(){
    this.logs.push(new Date())
    return this.display === true ? this.display = false : this.display = true;
  }

  color(index: number){
    if(index > 3){
      return "dodgerBlue"
    }
  }
}
