import { PaisesService } from './_service/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-rest-covid';
  pais: string = '';
  resultado: boolean = false;

  localidad = [];
  constructor(
    private paisesService: PaisesService
  ) { }

  ngOnInit() {
    this.paisesService.listar().subscribe(data => {
      this.localidad = data.locations;
    });
  };

  seleccion(event: any) {
    console.log(event.target.value);
    //console.log(event.target.textContext);
    this.resultado = true;
  }
}
