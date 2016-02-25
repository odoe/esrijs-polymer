define(['exports', 'esri/Map', 'esri/layers/FeatureLayer', 'esri/views/MapView', 'app/views/PolymerView/Controller'], function (exports, _esriMap, _esriLayersFeatureLayer, _esriViewsMapView, _appViewsPolymerViewController) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Map = _interopRequireDefault(_esriMap);

  var _FeatureLayer = _interopRequireDefault(_esriLayersFeatureLayer);

  var _MapView = _interopRequireDefault(_esriViewsMapView);

  var _PolymerController = _interopRequireDefault(_appViewsPolymerViewController);

  var map = new _Map['default']({
    basemap: 'dark-gray',
    layers: [new _FeatureLayer['default']({ url: 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/GeoFRED_Per_Capita_Personal_Income_by_County_Dollars/FeatureServer/0' })]
  });

  var view = new _MapView['default']({
    map: map,
    container: 'viewDiv',
    center: [-96.786, 37.051],
    zoom: 5
  });

  view.then(function () {
    var pctrl = new _PolymerController['default'](view.extent);
    view.watch('extent', function (val) {
      pctrl.model.extent = val.toJSON();
    });
  });
});
//# sourceMappingURL=main.js.map
