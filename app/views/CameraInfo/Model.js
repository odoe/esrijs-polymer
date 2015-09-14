define([
  'dojo/_base/declare',
  'esri/core/Accessor',
  'esri/Camera'
], function(
  declare,
  Accessor,
  Camera
) {

  var Model = declare([Accessor], {
    classMetadata: {
      properties: {
        camera: {
          type: Camera
        }
      }
    }
  });

  return Model;

});
