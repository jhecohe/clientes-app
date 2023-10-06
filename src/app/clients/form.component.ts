import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientsService } from './clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public title: string = "Create Client";
  public client: Client = new Client();

  constructor(private clientService: ClientsService,
    private router: Router,
    private activatedRute: ActivatedRoute) { }

  public create(): void {
    console.log("Cliked !!!");
    this.clientService.create(this.client)
      .subscribe(
        client => {
          this.router.navigate(['/clients']);
          swal.fire('New Client', `Client ${client.name} created`, 'success');
        }
      );
  }

  public loadClient(): void {
    console.log("Updating...");
    this.activatedRute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.clientService.getClientById(id).subscribe(
            client => this.client = client
          );
        }
      }
    )

  }

  public update(): void {
    console.log("Updating !!!");
    this.clientService.update(this.client)
      .subscribe(
        client => {
          this.router.navigate(['/clients']);
          swal.fire('Updated Client', `Client ${client.name}`, 'success');
        }
      );
  }

  ngOnInit(): void {
    this.loadClient();
   }
}
