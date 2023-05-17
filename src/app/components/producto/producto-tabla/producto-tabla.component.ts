import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css'],
})
export class ProductoTablaComponent implements OnInit {
  listaProd: Producto[]  = [];
  
  constructor(private service:ProductoService) {}

  ngOnInit(): void {
    this.actualizarTabla();
  }
  agregarMarca() {
    throw new Error('Method not implemented.');
  }
  actualizarTabla() {
    this.service.getAllProductos()
      .subscribe(productos => {
        this.listaProd = productos;
      });
  }
  eliminar(producto: Producto) {
    throw new Error('Method not implemented.');
  }
  editar(producto:Producto) {
    throw new Error('Method not implemented.');
  }
}
