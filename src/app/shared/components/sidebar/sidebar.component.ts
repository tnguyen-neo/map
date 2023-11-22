import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isMenuShow: boolean = true;

  linkItems = [
    { label: 'Admin', path: '/map-admin', icon: 'pi pi-user-plus' },
    { label: 'User', path: '/map-user', icon: 'pi pi-user' },
  ];

  @Input() sidebarVisible = false;
  @Output() sidebarVisibleChange = new EventEmitter<boolean>();

  getMenuIcon() {
    return this.isMenuShow ? 'pi pi-chevron-left' : 'pi pi-chevron-right';
  }

  updateSideBar(value: boolean = this.sidebarVisible) {
    this.sidebarVisible = value;
    this.sidebarVisibleChange.emit(this.sidebarVisible);
  }

  isActive(path?: string): boolean {
    if (!path) return false;
    const locationPath = window.location.pathname;
    const index = locationPath.search(path);
    return (
      index > 0 &&
      locationPath[index - 1] === '/' &&
      locationPath.includes(path)
    );
  }
}
