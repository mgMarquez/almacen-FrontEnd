import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Rubro } from '../interfaces/rubro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RubroService {
  url: string = environment.apiUrl + '/rubro';

  constructor(private http:HttpClient) { }

  getAllRubros(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(this.url);
  }
}
