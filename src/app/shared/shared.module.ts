import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SentenceCasePipe } from '../core/pipes/sentence-case.pipe';
import { CustomToast } from '../core/utilities/custom-toast.util';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, CoreModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, SentenceCasePipe],
  providers: [CustomToast, MessageService],
})
export class SharedModule {}
