/* */ 
define(['exports', './constants'], function (exports, _constants) {
  'use strict';

  exports.__esModule = true;
  exports.fireEvent = fireEvent;
  exports.fireKendoEvent = fireKendoEvent;

  function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  function fireKendoEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return fireEvent(element, '' + _constants.constants.eventPrefix + name, data);
  }
});