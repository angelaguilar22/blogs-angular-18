import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  declarations: [PruebaComponent, BuscarComponent],
  imports: [CommonModule, CategoryRoutingModule, MaterialModule],
})
export class CategoryModule {}
