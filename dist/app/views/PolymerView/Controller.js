define(['exports', 'module', './Model', './components/ViewProxy'], function (exports, module, _Model, _componentsViewProxy) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Model2 = _interopRequireDefault(_Model);

  var _Component = _interopRequireDefault(_componentsViewProxy);

  // Controller links Model and view

  var Controller = function Controller(extent) {
    var _this = this;

    _classCallCheck(this, Controller);

    this.model = new _Model2['default']({ extent: extent });

    var _model$extent = this.model.extent;
    var xmin = _model$extent.xmin;
    var ymin = _model$extent.ymin;
    var xmax = _model$extent.xmax;
    var ymax = _model$extent.ymax;

    this.view = new _Component['default']({ position: 'topright', xmin: xmin, ymin: ymin, xmax: xmax, ymax: ymax });

    this.model.watch('extent', function (val) {
      _this.view.update({
        xmin: val.xmin,
        ymin: val.ymin,
        xmax: val.xmax,
        ymax: val.ymax
      });
    });
  };

  ;

  module.exports = Controller;
});
//# sourceMappingURL=Controller.js.map
