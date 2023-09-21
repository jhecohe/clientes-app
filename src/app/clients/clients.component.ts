import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit{

  clients: Client[];
  constructor(private clienrService: ClientsService){}
  
  ngOnInit(): void {
    this.clienrService.getClients().subscribe(
      clients => this.clients = clients
    );
  }
}
