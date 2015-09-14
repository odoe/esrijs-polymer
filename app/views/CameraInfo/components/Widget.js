define([
  'dojo/_base/declare',
  'dojo/dom-construct',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./Widget.html'
], function(
  declare,
  domConstruct,
  _WidgetBase, _TemplatedMixin,
  template
) {

  function fixedN(x, n) {
    return x.toFixed(n);
  }

  // Component is extremely data naive
  // It only updates a view, no real logic
  var Component = declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    baseClass: 'cameraInfo',
    constructor: function() {
      this.set('tilt', 0);
      this.set('heading', 0);
    },
    postCreate: function() {
      this.watch('tilt', function(_, __, val) {
        var tilt = fixedN(val, 1);
        var itxt = this.tiltNode.innerText;
        if (itxt === tilt.toString()) {
          return;
        }
        this.tiltNode.innerText = tilt;
      }.bind(this));
      this.watch('heading', function(_, __, val) {
        var heading = fixedN(val, 1);
        var itxt = this.headingNode.innerText;
        if (itxt === heading.toString()) {
          return;
        }
        this.headingNode.innerText = heading;
      }.bind(this));
      this.updatePosition();
    },
    updatePosition: function() {
      var position = this.position;
      var node = document.querySelector('.esriTop.esriRight');
      domConstruct.place(this.domNode, node);
    }
  });

  return Component;

});
