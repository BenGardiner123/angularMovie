import { Component, OnInit } from '@angular/core';
import { latLng, LeafletMouseEvent, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longditude = event.latlng.lng;
    console.log({latitude, longditude});
  }
}
