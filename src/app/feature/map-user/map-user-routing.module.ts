import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapUserComponent } from './map-user.component';

const routes: Routes = [{ path: '', component: MapUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapUserRoutingModule { }
