import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapUserRoutingModule } from './map-user-routing.module';
import { MapUserComponent } from './map-user.component';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [MapUserComponent, MapComponent],
  imports: [CommonModule, MapUserRoutingModule, SharedModule, InputTextModule],
})
export class MapUserModule {}
