import { Component } from '@angular/core';
import { Locations } from 'src/app/core/constants/location';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.component.html',
  styleUrls: ['./map-user.component.scss']
})
export class MapUserComponent {
  locations = Locations;
  lat?: string;
  long?: string;
}
