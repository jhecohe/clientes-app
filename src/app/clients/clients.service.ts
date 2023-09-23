import { Injectable, OnInit } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './clients.json';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlClient: string = "http://localhost:8080/api/client"

  constructor(private http:HttpClient) { }

  getClients(): Observable<Client[]> {
    // return of (CLIENTS);
    return this.http.get(this.urlClient).pipe(
      map( response => response as Client[])
    );
  }
}
