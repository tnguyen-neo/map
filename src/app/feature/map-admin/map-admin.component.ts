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

  Status = ApprovalStatus;

  isActive(item: any) {
    // return item.status === ApprovalStatus.PENDING;
    return true;
  }

  pend(item: any) {
    this.setStatus(item, ApprovalStatus.PENDING);
  }

  approve(item: any) {
    this.setStatus(item, ApprovalStatus.APPROVAL);
  }

  deny(item: any) {
    this.setStatus(item, ApprovalStatus.DENIED);
  }

  setStatus(item: any, status: ApprovalStatus) {
    const loc = this.data.find((a: any) => a.id === item.id);
    if (!loc) return;

    loc.status = status;
    switch (status) {
      case ApprovalStatus.PENDING:
        this.toast.warn('Done', 'Item has been pended');
        break;
      case ApprovalStatus.APPROVAL:
        this.toast.success('Done', 'Item has been approved');
        break;
      case ApprovalStatus.DENIED:
        this.toast.error('Done', 'Item has been denied');
    }
  }
}
