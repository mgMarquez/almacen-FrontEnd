import { Component } from '@angular/core';
import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css'],
})
export class TablaMarcaComponent {
  listaMarcas: Marca[] = [];

  constructor(private marcaService: MarcaService) {}

  actualizarTabla() {
     this.marcaService.getAllMarcas()
      .subscribe(marcas => {
        this.listaMarcas = marcas;
      })
  }

  editar(marca: Marca): void {

  }

  eliminar(marca: Marca): void {

  }
}
