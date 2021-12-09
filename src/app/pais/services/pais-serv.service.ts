import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisInt } from '../interfaces/pais-int';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apirest: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(cadena:string): Observable<PaisInt[]> {
    const url = `${this.apirest}/name/${cadena}`;
    return this.http.get<PaisInt[]>(url);
  }

  buscarCapital(cadena:string): Observable<PaisInt[]> {
    const url = `${this.apirest}/capital/${cadena}`;
    return this.http.get<PaisInt[]>(url);
  }

  getPaisPorAlpha( id: string ):Observable<PaisInt>{
    const url = `${ this.apirest }/alpha/${ id }`;
    return this.http.get<PaisInt>(url);
  }
}
