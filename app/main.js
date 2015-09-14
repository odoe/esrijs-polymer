define([
  'esri/Map',
  'esri/views/MapView',
  'app/views/PolymerView/Controller'
], function(
  Map, MapView,
  PolymerController
) {
  var map = new Map({
    basemap: 'dark-gray'
  });

  var view = new MapView({
    map: map,
    container: 'viewDiv',
    center: [-118.078, 34.117],
    zoom: 12
  });
  view.then(function() {
    var pctrl = new PolymerController(view.extent);
    view.watch('extent', function(val) {
      pctrl.model.set('extent', val.toJSON());
    });
  });
});
