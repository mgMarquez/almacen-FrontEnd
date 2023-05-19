import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../interfaces/marca';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  url: string = environment.apiUrl + '/marcas';

  constructor(private http: HttpClient) {}

  getAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.url);
  }

  getMarca(id: number): Observable<Marca> {
    return this.http.get<Marca>(this.url + `/${id}`);
  }

  createMarca(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.url, marca);
  }

  updateMarca(marca: Marca): Observable<Marca> {
    return this.http.put<Marca>(this.url + `/${marca.id}`, marca);
  }

  deleteMarca(id: number): Observable<any>{
    return this.http.delete(this.url + `/${id}`);
  }
}
