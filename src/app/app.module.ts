import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './components/comun/toolbar/toolbar.component';
import { SidebarComponent } from './components/comun/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '@shared/material/material.module';
import { ConfirDialogComponent } from './components/comun/confir-dialog/confir-dialog.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent,
    ConfirDialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
