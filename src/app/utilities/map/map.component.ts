import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer, icon } from 'leaflet';
import * as L from 'leaflet';
import { coordinatesMap, coordinatesMapWithMessage } from './coordinate';

//https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service
//even though i followed the directions form asyemetirux it didnt work ... this did though
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => {
     const m = marker([value.latitude, value.longitude]);
     if(value.message){
       m.bindPopup(value.message, {autoClose: false,autoPan: false } )
     }
     return m
    });
  }

  @Input()
  initialCoordinates: coordinatesMapWithMessage[]= [];

  @Input()
  editMode: boolean = true;

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  //set the basic options for when the map starts
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 18, 
      attribution: 'Angular Movies' })
    ],
    zoom: 12,
    center: latLng(-26.60873208945273,  153.05902632186192)
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    if(this.editMode){
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({latitude, longitude});
      this.layers = [];
      this.layers.push(marker([latitude, longitude]));
      this.onSelectedLocation.emit({latitude, longitude});
    }
    
  }

  
}
