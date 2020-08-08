import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrserviceService {
  
  socket;

  constructor() { }

  setupSocketConnection(names) {
    console.log(environment.SOCKET_ENDPOINT+names)
    this.socket = io(environment.SOCKET_ENDPOINT+names);
  }
}
