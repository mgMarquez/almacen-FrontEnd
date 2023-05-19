import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rubro } from 'src/app/interfaces/rubro';
import { RubroService } from 'src/app/services/rubro.service';

@Component({
  selector: 'app-rubro-modal',
  templateUrl: './rubro-modal.component.html',
  styleUrls: ['./rubro-modal.component.css'],
})
export class RubroModalComponent {
  @Output() eventData = new EventEmitter();
  formRubro: FormGroup;
  isEditar: boolean = false;

  constructor(
    private rubroService: RubroService,
    private formBuilder: FormBuilder
  ) {
    this.formRubro = this.formBuilder.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
    });
  }

  editarRubro(rubro: Rubro): void {
    this.isEditar = true;
    this.formRubro.patchValue(rubro);
  }

  crearRubro(): void {
    this.isEditar = false;
    let rubro: Rubro = { id: 0, nombre: '' };
    this.formRubro.patchValue(rubro);
  }

  eliminarRubro(id: number): void {
    this.rubroService.deleteRubro(id).subscribe(() => this.eventData.emit());
  }

  onSubmit(): void {
    let rubro: Rubro = this.formRubro.value;
    if (this.isEditar) {
      this.rubroService
        .updateRubro(rubro)
        .subscribe(() => this.eventData.emit());
    } else {
      this.rubroService
        .createRubro(rubro)
        .subscribe(() => this.eventData.emit());
    }
  }
}
