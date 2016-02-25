define(['exports', 'esri/Map', 'esri/views/MapView', 'app/views/PolymerView/Controller'], function (exports, _esriMap, _esriViewsMapView, _appViewsPolymerViewController) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Map = _interopRequireDefault(_esriMap);

  var _MapView = _interopRequireDefault(_esriViewsMapView);

  var _PolymerController = _interopRequireDefault(_appViewsPolymerViewController);

  var map = new _Map['default']({
    basemap: 'dark-gray'
  });

  var view = new _MapView['default']({
    map: map,
    container: 'viewDiv',
    center: [-118.078, 34.117],
    zoom: 12
  });

  view.then(function () {
    var pctrl = new _PolymerController['default'](view.extent);
    view.watch('extent', function (val) {
      pctrl.model.extent = val.toJSON();
    });
  });
});
//# sourceMappingURL=main.js.map
