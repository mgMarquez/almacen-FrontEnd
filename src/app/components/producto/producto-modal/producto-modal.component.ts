import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.css'],
})
export class ProductoModalComponent {
  @Output() evenData = new EventEmitter();
  formProducto: FormGroup;
  isEdicion: boolean = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private productoService: ProductoService
  ) {
    this.formProducto = formBuilder.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidadEnStock: [0, Validators.required],
      precio: [0, Validators.required],
    });
  }

  nuevoProducto(): void {
    this.isEdicion = false;
    this.formProducto.reset();
  }

  editarProducto(producto: Producto) {
    this.isEdicion = true;
    this.formProducto.patchValue(producto);
  }

  onSubmit(): void {
    console.log(this.formProducto.value);
    let producto: Producto = this.formProducto.value;

    // TODO: cambiar la prueba de agregar marca y rubro
    producto.marca = { id: 1, nombre: '' };
    producto.rubro = { id: 1, nombre: '' };
    if (this.isEdicion) {
      this.productoService
        .updateProducto(producto)
        .subscribe(() => this.evenData.emit());
    } else {
      this.productoService
        .createProducto(producto)
        .subscribe(() => this.evenData.emit());
    }
  }
}
