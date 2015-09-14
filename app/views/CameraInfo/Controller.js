define([
  'dojo/_base/declare',
  './Model',
  './components/Widget'
], function(
  declare,
  Model, Component
) {

  // Controller links Model and view
  var Controller = declare(null, {
    constructor: function(camera) {
      this.model = new Model();
      this.model.camera = camera;
      this.view = new Component({
        position: 'topright',
        info: this.model.camera.tilt
      });
      this.model.watch('camera', function(val) {
        this.view.set('tilt', val.tilt);
        this.view.set('heading', val.heading);
      }.bind(this));
    }
  });

  return Controller;

});
