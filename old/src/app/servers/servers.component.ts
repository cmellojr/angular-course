import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
})

export class ServersComponent  {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }
 
  }
