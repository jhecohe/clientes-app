import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listCourses: string[] = ["Java", "Angular", "GO", "Kotlin"];

  enable: boolean = true;

}
