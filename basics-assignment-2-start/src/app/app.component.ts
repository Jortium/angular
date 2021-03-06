import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = '';

  onEnterUsername(event: { target: { value: string; }; }){
    this.username = event.target.value;
  }

  clearUsername(){
    this.username = '';
  }
}
