import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapAdminComponent } from './map-admin.component';

const routes: Routes = [{ path: '', component: MapAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapAdminRoutingModule { }
