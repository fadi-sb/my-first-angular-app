import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 5;
  serverStauts: string = 'offline';

 
  constructor() { 
    this.serverStauts = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit() {
  }

  getServerStauts(){
    return this.serverStauts;
  }

  getColor(){
   return this.serverStauts === 'online' ? 'green' : 'red';
  }
}
