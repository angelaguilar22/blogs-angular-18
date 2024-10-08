import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent as BuscarCategoriasComponent } from 'src/app/category-module/pages/buscar/buscar.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarCategoriasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
