import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Rubro } from '../interfaces/rubro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RubroService {
  url: string = environment.apiUrl + '/rubros';

  constructor(private http: HttpClient) {}

  getAllRubros(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(this.url);
  }

  getRubro(id: number): Observable<Rubro> {
    return this.http.get<Rubro>(this.url + `/${id}`);
  }

  createRubro(rubro: Rubro): Observable<Rubro> {
    return this.http.post<Rubro>(this.url, rubro);
  }

  updateRubro(rubro: Rubro): Observable<Rubro> {
    return this.http.put<Rubro>(this.url + `/${rubro.id}`, rubro);
  }

  deleteRubro(id: number): Observable<any>{
    return this.http.delete(this.url + `/${id}`);
  }
}
