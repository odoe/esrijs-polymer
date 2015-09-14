class Component {

  constructor(data) {
    // add import link
    var href = require.toUrl('app/views/PolymerView/components/ExtentInfo.html');
    var node = document.querySelector('.esriTop.esriRight');
    var link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', 'import');
    document.body.appendChild(link);

    var el = document.createElement('extent-info');
    node.appendChild(el);
    el.setAttribute('xmin', data.xmin)
    el.setAttribute('ymin', data.ymin)
    el.setAttribute('xmax', data.xmax)
    el.setAttribute('ymax', data.ymax)
    this.element = el;
  }

  update(data) {
    var el = this.element;
    el.setAttribute('xmin', data.xmin)
    el.setAttribute('ymin', data.ymin)
    el.setAttribute('xmax', data.xmax)
    el.setAttribute('ymax', data.ymax)
  }
};

export default Component;

