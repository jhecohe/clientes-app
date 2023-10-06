import { Injectable, OnInit } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './clients.json';
import { Observable, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlClient: string = "http://localhost:8080/api/client"
  private headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http:HttpClient) { }

  getClients(): Observable<Client[]> {
    // return of (CLIENTS);
    return this.http.get(this.urlClient).pipe(
      map( response => response as Client[])
    );
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlClient, client, {headers: this.headers});
  }

  getClientById(id:number): Observable<Client> {
    return this.http.get<Client>(`${this.urlClient}/${id}`);
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlClient}/${client.id}`, client, {headers: this.headers});
  }

  delete(id:number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlClient}/${id}`, {headers: this.headers});
  }
}
