define(['exports', 'module'], function (exports, module) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Component = (function () {
    function Component(data) {
      _classCallCheck(this, Component);

      // add import link
      var href = require.toUrl('app/views/PolymerView/components/ExtentInfo.html');
      var node = document.querySelector('.esri-ui-top-right.esri-ui-corner');
      var link = document.createElement('link');
      link.setAttribute('href', href);
      link.setAttribute('rel', 'import');
      document.body.appendChild(link);

      var el = document.createElement('extent-info');
      node.appendChild(el);
      el.setAttribute('xmin', data.xmin);
      el.setAttribute('ymin', data.ymin);
      el.setAttribute('xmax', data.xmax);
      el.setAttribute('ymax', data.ymax);
      this.element = el;
    }

    _createClass(Component, [{
      key: 'update',
      value: function update(data) {
        var el = this.element;
        el.setAttribute('xmin', data.xmin);
        el.setAttribute('ymin', data.ymin);
        el.setAttribute('xmax', data.xmax);
        el.setAttribute('ymax', data.ymax);
      }
    }]);

    return Component;
  })();

  ;

  module.exports = Component;
});
//# sourceMappingURL=ViewProxy.js.map
