import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import PolymerController from 'app/views/PolymerView/Controller';

let map = new Map({
  basemap: 'dark-gray'
});

let view = new MapView({
  map: map,
  container: 'viewDiv',
  center: [-118.078, 34.117],
  zoom: 12
});

view.then(() => {
  let pctrl = new PolymerController(view.extent);
  view.watch('extent', function(val) {
    pctrl.model.extent = val.toJSON();
  });
});
