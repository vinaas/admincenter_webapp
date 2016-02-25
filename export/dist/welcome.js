System.register([], function (_export) {
  'use strict';

  var Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ++ ' + this.lastName;
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BRWEsT0FBTyxFQTJCUCxtQkFBbUI7Ozs7Ozs7OztBQTNCbkIsYUFBTztpQkFBUCxPQUFPO2dDQUFQLE9BQU87O2VBQ2xCLE9BQU8sR0FBRyx3Q0FBd0M7ZUFDbEQsU0FBUyxHQUFHLE1BQU07ZUFDbEIsUUFBUSxHQUFHLEtBQUs7ZUFDaEIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFROzs7cUJBSmxCLE9BQU87O2lCQWVaLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNuQyxpQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQztXQUNyQzs7O2lCQUVZLHlCQUFHO0FBQ2QsZ0JBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3hDLHFCQUFPLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ25EO1dBQ0Y7OztlQWJXLGVBQUc7QUFDYixtQkFBVSxJQUFJLENBQUMsU0FBUyxZQUFPLElBQUksQ0FBQyxRQUFRLENBQUc7V0FDaEQ7OztlQWJVLE9BQU87Ozs7O0FBMkJQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1COztpQkFDeEIsZ0JBQUMsS0FBSyxFQUFFO0FBQ1osbUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUNyQzs7O2VBSFUsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7Y29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XHJcbiAgaGVhZGluZyA9ICdXZWxjb21lIHRvIHRoZSBBdXJlbGlhIE5hdmlnYXRpb24gQXBwISc7XHJcbiAgZmlyc3ROYW1lID0gJ0pvaG4nO1xyXG4gIGxhc3ROYW1lID0gJ0RvZSc7XHJcbiAgcHJldmlvdXNWYWx1ZSA9IHRoaXMuZnVsbE5hbWU7XHJcblxyXG4gIC8vR2V0dGVycyBjYW4ndCBiZSBkaXJlY3RseSBvYnNlcnZlZCwgc28gdGhleSBtdXN0IGJlIGRpcnR5IGNoZWNrZWQuXHJcbiAgLy9Ib3dldmVyLCBpZiB5b3UgdGVsbCBBdXJlbGlhIHRoZSBkZXBlbmRlbmNpZXMsIGl0IG5vIGxvbmdlciBuZWVkcyB0byBkaXJ0eSBjaGVjayB0aGUgcHJvcGVydHkuXHJcbiAgLy9UbyBvcHRpbWl6ZSBieSBkZWNsYXJpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCB0aGlzIGdldHRlciBpcyBjb21wdXRlZCBmcm9tLCB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3dcclxuICAvL2FzIHdlbGwgYXMgdGhlIGNvcnJlc3BvbmRpbmcgaW1wb3J0IGFib3ZlLlxyXG4gIC8vQGNvbXB1dGVkRnJvbSgnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJylcclxuICBnZXQgZnVsbE5hbWUoKSB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICsrICR7dGhpcy5sYXN0TmFtZX1gO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuICAgIGFsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xyXG4gIH1cclxuXHJcbiAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmZ1bGxOYW1lICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHBlclZhbHVlQ29udmVydGVyIHtcclxuICB0b1ZpZXcodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
