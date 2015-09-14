define([
  'dojo/_base/declare',
  'dojo/dom-construct'
], function(
  declare,
  domConstruct
) {

  var Component = declare(null, {

    constructor: function(data) {
      var href = require.toUrl('views/PolymerView/components/ExtentInfo.html');
      var node = document.querySelector('.esriTop.esriRight');
      domConstruct.create('link', {
        href: href,
        rel: 'import'
      }, document.body);
      var el = domConstruct.create('extent-info', null, node);
      el.setAttribute('xmin', data.xmin)
      el.setAttribute('ymin', data.ymin)
      el.setAttribute('xmax', data.xmax)
      el.setAttribute('ymax', data.ymax)
      this.element = el;
    },
    update: function(data) {
      var el = this.element;
      el.setAttribute('xmin', data.xmin)
      el.setAttribute('ymin', data.ymin)
      el.setAttribute('xmax', data.xmax)
      el.setAttribute('ymax', data.ymax)
    }
  });

  return Component;

});
