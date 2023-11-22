import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapAdminRoutingModule } from './map-admin-routing.module';
import { MapAdminComponent } from './map-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [MapAdminComponent],
  imports: [CommonModule, SharedModule, MapAdminRoutingModule, ToastModule],
})
export class MapAdminModule {}
