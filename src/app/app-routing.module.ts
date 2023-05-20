import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { RubroComponent } from './components/rubro/rubro.component';
import { MarcaComponent } from './components/marca/marca.component';

const routes: Routes = [
  { path: 'rubros', component: RubroComponent },
  { path: 'marcas', component: MarcaComponent },
  { path: 'productos', component: ProductoComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
