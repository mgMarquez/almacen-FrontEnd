import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from './components/marca/marca.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaMarcaComponent } from './components/marca/tabla-marca/tabla-marca.component';
import { ModalTablaComponent } from './components/marca/modal-tabla/modal-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    TablaMarcaComponent,
    ModalTablaComponent
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
