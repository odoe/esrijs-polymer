import Accessor from 'esri/core/Accessor';
import Extent from 'esri/geometry/Extent';

class Model extends Accessor {
  classMetadata: {
    properties: {
      extent: {
        type: Extent
      }
    }
  }
};

export default Model;

