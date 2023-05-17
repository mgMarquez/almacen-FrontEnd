import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css'],
})
export class TablaMarcaComponent implements OnInit {
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

  agregarMarca() {
    throw new Error('Method not implemented.');
  }

  editar(marca: Marca): void {
    throw new Error('Method not implemented.');
  }

  eliminar(marca: Marca): void {
    throw new Error('Method not implemented.');
  }
}
