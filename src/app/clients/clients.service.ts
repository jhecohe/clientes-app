import { Injectable, OnInit } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './clients.json';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClients(): Client[] {
    return CLIENTS;
  }
}
