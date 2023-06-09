import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-marca-tabla',
  templateUrl: './marca-tabla.component.html',
  styleUrls: ['./marca-tabla.component.css'],
})
export class MarcaTablaComponent implements OnInit {
  listaMarcas: Marca[] = [];

  constructor(private marcaService: MarcaService) {}
  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla() {
    this.marcaService.getAllMarcas().subscribe((marcas) => {
      this.listaMarcas = marcas;
    });
  }

  eliminarMarca(marca: Marca): void {
    this.marcaService.deleteMarca(marca.id)
      .subscribe(() => this.actualizarTabla());
  }
}
