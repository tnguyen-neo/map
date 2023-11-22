import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export class CustomToast {
  messageService = inject(MessageService);

  private show(type: string, title: string = 'Title', message: string = 'Message') {
    this.messageService.add({
      severity: type,
      summary: title,
      detail: message,
    });
  }

  success(title?: string, message?: string) {
    this.show('success', title, message);
  }

  info(title?: string, message?: string) {
    this.show('info', title, message);
  }

  warn(title?: string, message?: string) {
    this.show('warn', title, message);
  }

  error(title?: string, message?: string) {
    this.show('error', title, message);
  }
}
