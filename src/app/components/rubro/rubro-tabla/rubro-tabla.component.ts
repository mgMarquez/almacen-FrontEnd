import { Component, OnInit } from '@angular/core';
import { Rubro } from 'src/app/interfaces/rubro';
import { RubroService } from 'src/app/services/rubro.service';

@Component({
  selector: 'app-rubro-tabla',
  templateUrl: './rubro-tabla.component.html',
  styleUrls: ['./rubro-tabla.component.css']
})
export class RubroTablaComponent implements OnInit {
  listaRubros: Rubro[] = [];
  
  constructor(private service:RubroService) {}
  ngOnInit(): void {
    this.actualizarTabla();
  }
  
  actualizarTabla() {
    this.service.getAllRubros()
      .subscribe(rubros => {
        this.listaRubros = rubros;
      })
  }
}
