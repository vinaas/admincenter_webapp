/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo-ui/js/kendo.menu.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoUiJsKendoMenuMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var Menu = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Menu, [{
      key: 'options',
      decorators: [_aureliaTemplating.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function Menu(element, widgetBase) {
      _classCallCheck(this, _Menu);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
    }

    Menu.prototype.bind = function bind(ctx) {
      this.$parent = ctx;

      this.recreate();
    };

    Menu.prototype.recreate = function recreate() {
      var element = undefined;
      var ul = $(this.element).find('ul');
      if (ul.has()) {
        element = $(this.element).find('ul').first();
      } else {
        element = $(this.element).appendChild('<ul></ul>');
      }

      this.kWidget = this.widgetBase.createWidget({
        element: element,
        parentCtx: this.$parent
      });
    };

    Menu.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _Menu = Menu;
    Menu = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Menu) || Menu;
    Menu = _commonDecorators.generateBindables('kendoMenu')(Menu) || Menu;
    Menu = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'menu')(Menu) || Menu;
    return Menu;
  })();

  exports.Menu = Menu;
});