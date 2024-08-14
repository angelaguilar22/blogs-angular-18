import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/comun/toolbar/toolbar.component';
import { SidebarComponent } from './components/comun/sidebar/sidebar.component';
@NgModule({
  declarations: [AppComponent, ToolbarComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
