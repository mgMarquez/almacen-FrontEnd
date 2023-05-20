import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string = environment.apiUrl + '/productos';

  constructor(private http:HttpClient) { }

  createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  getAllProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + `/${id}`);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url + `/${producto.id}`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(this.url + `/${id}`);
  }
}
