import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/';

  constructor(
    private http: HttpClient
  ) { }

  listar() {
    console.log(this.url);
    return this.http.get<any>(this.url);
  }

  listarCantidad(id: number) {
    return this.http.get<any>(`${this.url}${id}`);
  }
}
