import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'category',
    loadChildren: () =>
      import('src/app/category-module/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('src/app/tags-module/tags.module').then((m) => m.TagsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('src/app/users-module/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
