import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent as BuscarCategoriasComponent } from '@components/categorias/buscar/buscar.component';
import { BuscarComponent as BuscarEtiquetasComponent } from '@components/etiquetas/buscar/buscar.component';
import { BuscarComponent as BuscarUsuariosComponent } from '@components/usuario/buscar/buscar.component';

const routes: Routes = [
  {
    path: 'category',
    component: BuscarCategoriasComponent,
  },
  {
    path: 'tags',
    component: BuscarEtiquetasComponent,
  },
  {
    path: 'users',
    component: BuscarUsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
