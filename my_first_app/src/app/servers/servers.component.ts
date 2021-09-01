 import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  // Selector works similarly as CSS we can also use [app-server] to make it select attribute or for class we can use .
  // In the HTML portion to select these an example may be <div app-servers></div> using [] as the selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Test Server';
  serverCreated = false;
  servers = [
    'Testserver',
    'Testserver 2'
  ];

  constructor(){
    setTimeout(()=> { this.allowNewServer = true}
    ,1000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! The name is: ' + this.serverName;
  }

  onUpdateServerName(event: { target: { value: string; }; }){
    this.serverName = event.target.value;
  }

}
