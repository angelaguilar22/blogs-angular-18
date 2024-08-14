import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  opened = true; // Añadimos esta propiedad
  title = 'Principal';

  // Método para alternar el estado de 'opened'
  toggleSidenav(): void {
    this.opened = !this.opened;
  }
}
