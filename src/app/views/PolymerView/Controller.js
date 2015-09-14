import Model from './Model';
import Component from './components/ViewProxy';

// Controller links Model and view
class Controller {
  constructor(extent) {
    this.model = new Model({ extent: extent });

    this.view = new Component({
      position: 'topright',
      xmin: this.model.extent.xmin,
      ymin: this.model.extent.ymin,
      xmax: this.model.extent.xmax,
      ymax: this.model.extent.ymax
    });

    this.model.watch('extent', (val) => {
      this.view.update({
        xmin: val.xmin,
        ymin: val.ymin,
        xmax: val.xmax,
        ymax: val.ymax
      });
    });
  }
};

export default Controller;

