import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/categorias/buscar/buscar.component';

const routes: Routes = [{ path: 'category', component: BuscarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
