import { Injectable } from '@angular/core';
import { Empresa } from './empresa';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class EmpresaService {
  private lista: string = 'http://localhost:8080/api/listarempresas';




  constructor(private http: HttpClient) { }

  getempre(): Observable<Empresa[]> {
    return this.http.get(this.lista).pipe(map(response=>response as Empresa[]));
  }
}
