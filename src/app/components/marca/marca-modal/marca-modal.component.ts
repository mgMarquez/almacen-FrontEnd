import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-marca-modal',
  templateUrl: './marca-modal.component.html',
  styleUrls: ['./marca-modal.component.css'],
})
export class MarcaModalComponent {
  @Output() eventData = new EventEmitter();
  isEditar: boolean = false;
  formMarca: FormGroup;

  constructor(
    private marcaService: MarcaService,
    private formBuilder: FormBuilder
  ) {
    this.formMarca = this.formBuilder.group({
      id: [0, [Validators.required]],
      nombre: [``, [Validators.required]],
    });
  }

  agregarMarca(): void {
    this.isEditar = false;
    let marca: Marca = { id: 0, nombre: '' };
    this.formMarca.patchValue(marca);
  }

  editarMarca(marca: Marca): void {
    this.isEditar = true;
    this.formMarca.patchValue(marca);
  }

  onSubmit(): void {
    if (this.isEditar) {
      this.marcaService
        .updateMarca(this.formMarca.value)
        .subscribe(() => this.eventData.emit());
    } else {
      this.marcaService
        .createMarca(this.formMarca.value)
        .subscribe(() => this.eventData.emit());
    }
  }
}
