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
  codigoPais: number = 0;
  poblacion: number = 0;
  infectados: number = 0;
  recuperados: number = 0;
  fallecidos: number = 0;

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
    this.resultado = false;
    this.codigoPais = event.target.value;
    this.paisesService.listarCantidad(this.codigoPais).subscribe(data => {
      this.poblacion = data.location.country_population;
      this.infectados = data.location.latest.confirmed;
      this.recuperados = data.location.latest.recovered;
      this.fallecidos = data.location.latest.deaths;
    });
    this.resultado = true;
  }
}
