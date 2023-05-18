import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from './components/marca/marca.component';
import { HttpClientModule } from '@angular/common/http';
import { RubroComponent } from './components/rubro/rubro.component';
import { RubroTablaComponent } from './components/rubro/rubro-tabla/rubro-tabla.component';
import { RubroModalComponent } from './components/rubro/rubro-modal/rubro-modal.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoTablaComponent } from './components/producto/producto-tabla/producto-tabla.component';
import { ProductoModalComponent } from './components/producto/producto-modal/producto-modal.component';
import { MarcaModalComponent } from './components/marca/marca-modal/marca-modal.component';
import { MarcaTablaComponent } from './components/marca/marca-tabla/marca-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    RubroComponent,
    RubroTablaComponent,
    RubroModalComponent,
    ProductoComponent,
    ProductoTablaComponent,
    ProductoModalComponent,
    MarcaModalComponent,
    MarcaTablaComponent
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
