import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTagComponent } from './components/grid-tag/grid-tag.component';
import { MaterialModule } from '@shared/material/material.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { TagsRoutingModule } from './tags-routing.module';
@NgModule({
  declarations: [GridTagComponent, BuscarComponent],
  imports: [CommonModule, TagsRoutingModule, MaterialModule],
})
export class TagsModule {}
