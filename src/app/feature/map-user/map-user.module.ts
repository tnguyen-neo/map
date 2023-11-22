import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapUserRoutingModule } from './map-user-routing.module';
import { MapUserComponent } from './map-user.component';

@NgModule({
  declarations: [MapUserComponent],
  imports: [CommonModule, MapUserRoutingModule],
})
export class MapUserModule {}
