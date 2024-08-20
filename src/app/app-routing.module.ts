import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent as BuscarEtiquetasComponent } from '@components/etiquetas/buscar/buscar.component';
import { BuscarComponent as BuscarUsuariosComponent } from '@components/usuario/buscar/buscar.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from '@components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@components/categorias/category/category.module').then(
        (m) => m.CategoryModule
      ),
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
