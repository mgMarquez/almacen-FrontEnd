import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from './components/marca/marca.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaMarcaComponent } from './components/marca/tabla-marca/tabla-marca.component';
import { ModalTablaComponent } from './components/marca/modal-tabla/modal-tabla.component';
import { RubroComponent } from './components/rubro/rubro.component';
import { RubroTablaComponent } from './components/rubro/rubro-tabla/rubro-tabla.component';
import { RubroModalComponent } from './components/rubro/rubro-modal/rubro-modal.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoTablaComponent } from './components/producto/producto-tabla/producto-tabla.component';
import { ProductoModalComponent } from './components/producto/producto-modal/producto-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    TablaMarcaComponent,
    ModalTablaComponent,
    RubroComponent,
    RubroTablaComponent,
    RubroModalComponent,
    ProductoComponent,
    ProductoTablaComponent,
    ProductoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
