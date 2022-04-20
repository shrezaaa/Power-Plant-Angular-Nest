import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'p-plant-plants-map',
  templateUrl: './plants-map.component.html',
  styleUrls: ['./plants-map.component.scss']
})
export class PlantsMapComponent {

  title = 'AngularOSM';
 

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(43.530147, 16.488932)
  };
  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
}
}
export const getMarkers = (): Leaflet.Marker[] => {
  //this function create markers
  return [
    new Leaflet.Marker(new Leaflet.LatLng(43.5121264, 16.4700729), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: '../../../../assets/images/map/blue-marker.svg',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions),
    new Leaflet.Marker(new Leaflet.LatLng(43.5074826, 16.4390046), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: '../../../../assets/images/map/red-marker.svg',
      }),
      title: 'Riva'
      
    } as Leaflet.MarkerOptions).on('click',onClick),
  ] as Leaflet.Marker[];
};
export const onClick = (e)=>{
  console.log(e);
  
}
export const getRoutes = (): Leaflet.Polyline[] => {
  return [
    // new Leaflet.Polyline([
    //   new Leaflet.LatLng(43.5121264, 16.4700729),
    //   new Leaflet.LatLng(43.5074826, 16.4390046),
    // ] as Leaflet.LatLng[], {
    //   color: '#0d9148'
    // } as Leaflet.PolylineOptions)
  ] as Leaflet.Polyline[];
};


export const getLayers = (): Leaflet.Layer[] => {
  return [
    // Basic style
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    // Pastel style, remove if you want basic style. Uncomment if you want pastel style.

    // new Leaflet.TileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key={your_key}', {
    //   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    // } as Leaflet.TileLayerOptions),
    ...getMarkers(),
    ...getRoutes(),
    ...getPolygons()
  ] as Leaflet.Layer[];
};

export const getPolygons = (): Leaflet.Polygon[] => {
  // this function create polylines
  return [
    // new Leaflet.Polygon([
    //   new Leaflet.LatLng(43.5181349, 16.4537963),
    //   new Leaflet.LatLng(43.517890, 16.439939),
    //   new Leaflet.LatLng(43.515599, 16.446556),
    //   new Leaflet.LatLng(43.518025, 16.463492)
    // ] as Leaflet.LatLng[],
    //   {
    //     fillColor: '#eb530d',
    //     color: '#eb780d'
    //   } as Leaflet.PolylineOptions)
  ] as Leaflet.Polygon[];
};