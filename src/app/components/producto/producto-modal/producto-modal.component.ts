import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Marca } from 'src/app/interfaces/marca';
import { Producto } from 'src/app/interfaces/producto';
import { Rubro } from 'src/app/interfaces/rubro';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';
import { RubroService } from 'src/app/services/rubro.service';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.css'],
})
export class ProductoModalComponent {
  @Output() evenData = new EventEmitter();
  formProducto: FormGroup;
  isEdicion: boolean = false;
  marcas: Marca[] = [];
  rubros: Rubro[] = [];

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private productoService: ProductoService,
    private marcaService: MarcaService,
    private rubroService: RubroService
  ) {
    this.formProducto = this.formBuilder.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidadEnStock: [0, Validators.required],
      precio: [0, Validators.required],
      marca: this.formBuilder.group({
        id: [0],
        nombre: [''],
      }),
      rubro: this.formBuilder.group({
        id: [0],
        nombre: [''],
      }),
    });
  }

  cargarMenuOpciones(): void {
    this.marcaService.getAllMarcas().subscribe((marcas) => {
      this.marcas = marcas;
    });
    this.rubroService.getAllRubros().subscribe((rubros) => {
      this.rubros = rubros;
    });
  }

  nuevoProducto(): void {
    this.isEdicion = false;
    this.formProducto.reset();
    this.cargarMenuOpciones();
  }

  editarProducto(producto: Producto) {
    this.isEdicion = true;
    this.cargarMenuOpciones();
    this.formProducto.patchValue(producto);
  }

  onSubmit(): void {
    let producto: Producto = this.formProducto.value;

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
