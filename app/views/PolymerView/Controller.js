define([
  'dojo/_base/declare',
  './Model',
  './components/ViewProxy'
], function(
  declare,
  Model, Component
) {

  // Controller links Model and view
  var Controller = declare(null, {
    constructor: function(extent) {
      this.model = new Model({ extent: extent });
      this.view = new Component({
        position: 'topright',
        xmin: this.model.extent.xmin,
        ymin: this.model.extent.ymin,
        xmax: this.model.extent.xmax,
        ymax: this.model.extent.ymax
      });
      this.model.watch('extent', function(val) {
        this.view.update({
          xmin: val.xmin,
          ymin: val.ymin,
          xmax: val.xmax,
          ymax: val.ymax
        });
      }.bind(this));
    }
  });

  return Controller;

});
