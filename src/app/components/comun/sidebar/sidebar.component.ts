import { Component } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  listMenu = [
    {
      path: '/tags',
      title: 'Etiquetas',
      icon: 'sell',
    },
    {
      path: '/category',
      title: 'Categorias',
      icon: 'category',
    },
    {
      path: '/users',
      title: 'Usuarios',
      icon: 'person',
    },
  ];
}
