import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  private serverId: number = 10;
  private serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  public getServerId() {
    return this.serverId;
  }
  public getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.getServerStatus() === "online" ? "green" : "red";
  }
}

