import { Component } from '@angular/core';
import { MarcaService } from '../../services/marca.service';
import { Marca } from 'src/app/interfaces/marca';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
})
export class MarcaComponent {
  constructor(private marcaService: MarcaService) {}

  getAllMarcas() {
    this.marcaService.getAllMarcas()
      .subscribe(data => {
        console.log(data);
    });
  }

  marcaSeleccionada(marca: Marca) {
    console.log(marca);
  }

}
