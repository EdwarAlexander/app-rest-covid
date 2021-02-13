import { PaisesService } from './_service/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-rest-covid';

  localidad = [];
  constructor(
    private paisesService: PaisesService
  ) { }

  ngOnInit() {
    this.paisesService.listar().subscribe(data => {
      this.localidad = data.locations;
    });
  };
}
