import { Injectable, OnInit } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './clients.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of (CLIENTS);
  }
}
