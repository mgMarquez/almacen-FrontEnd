import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../interfaces/marca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  url: string = 'http://localhost:8080/api/marca';

  constructor(private http: HttpClient) {}

  getAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.url);
  }

  getMarca(): Observable<Marca> {
    return this.http.get<Marca>(this.url + '/1');
  }
}
