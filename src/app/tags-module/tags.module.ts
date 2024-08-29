import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTagComponent } from './components/grid-tag/grid-tag.component';
import { MaterialModule } from '@shared/material/material.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { TagsRoutingModule } from './tags-routing.module';
import { FormTagComponent } from './components/form-tag/form-tag.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PruebaFormComponent } from './components/prueba-form/prueba-form.component';
@NgModule({
  declarations: [
    GridTagComponent,
    BuscarComponent,
    FormTagComponent,
    PruebaFormComponent,
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    MaterialModule,
    ReactiveFormsModule, // TODO: quizas mover a un sharedModule
  ],
})
export class TagsModule {}
