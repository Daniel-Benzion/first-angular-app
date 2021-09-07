import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  private serverId: number = 10;
  private serverStatus: string = "offline";


  public getServerId() {
    return this.serverId;
  }
  public getServerStatus() {
    return this.serverStatus;
  }
}

