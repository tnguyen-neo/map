import { Component, inject } from '@angular/core';
import { Locations } from 'src/app/core/constants/location';
import { ApprovalStatus } from 'src/app/core/enums/approval-status.enum';
import { CustomToast } from 'src/app/core/utilities/custom-toast.util';

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styleUrls: ['./map-admin.component.scss'],
})
export class MapAdminComponent {
  toast = inject(CustomToast);
  data = Locations;

  isActive(item: any) {
    return item.status === ApprovalStatus.PENDING;
  }

  confirm() {
    this.toast.success('Done', 'Confirmed');
  }

  reject() {
    this.toast.error('Done', 'Rejected');
  }
}
