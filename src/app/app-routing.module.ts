import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map-admin',
    loadChildren: () =>
      import('./feature/map-admin/map-admin.module').then(
        (m) => m.MapAdminModule
      ),
  },
  {
    path: 'map-user',
    loadChildren: () =>
      import('./feature/map-user/map-user.module').then((m) => m.MapUserModule),
  },
  {
    path: '',
    redirectTo: 'map-admin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
