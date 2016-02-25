import Map from 'esri/Map';
import FeatureLayer from 'esri/layers/FeatureLayer';
import MapView from 'esri/views/MapView';
import PolymerController from 'app/views/PolymerView/Controller';

let map = new Map({
  basemap: 'dark-gray',
  layers: [
    new FeatureLayer({ url: 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/GeoFRED_Per_Capita_Personal_Income_by_County_Dollars/FeatureServer/0' })
  ]
});

let view = new MapView({
  map: map,
  container: 'viewDiv',
  center: [-96.786, 37.051],
  zoom: 5
});

view.then(() => {
  let pctrl = new PolymerController(view.extent);
  view.watch('extent', function(val) {
    pctrl.model.extent = val.toJSON();
  });
});
