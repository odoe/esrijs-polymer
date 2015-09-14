define([
  'dojo/_base/declare',
  'esri/core/Accessor',
  'esri/geometry/Extent'
], function(
  declare,
  Accessor,
  Extent
) {

  var Model = declare([Accessor], {
    classMetadata: {
      properties: {
        extent: {
          type: Extent
        }
      }
    }
  });

  return Model;

});
