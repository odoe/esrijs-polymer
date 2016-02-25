class Component {

  constructor(data) {
    // add import link
    let href = require.toUrl('app/views/PolymerView/components/ExtentInfo.html');
    let node = document.querySelector('.esri-ui-top-right.esri-ui-corner');
    let link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', 'import');
    document.body.appendChild(link);

    let el = document.createElement('extent-info');
    node.appendChild(el);
    el.setAttribute('xmin', data.xmin)
    el.setAttribute('ymin', data.ymin)
    el.setAttribute('xmax', data.xmax)
    el.setAttribute('ymax', data.ymax)
    this.element = el;
  }

  update(data) {
    let el = this.element;
    el.setAttribute('xmin', data.xmin)
    el.setAttribute('ymin', data.ymin)
    el.setAttribute('xmax', data.xmax)
    el.setAttribute('ymax', data.ymax)
  }
};

export default Component;

