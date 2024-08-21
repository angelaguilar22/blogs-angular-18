import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { BuscarComponent } from './pages/buscar/buscar.component';

@NgModule({
  declarations: [BuscarComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
