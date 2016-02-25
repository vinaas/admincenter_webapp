System.register(['bootstrap'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-kendoui-bridge', function (kendo) {
      return kendo.core();
    });

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_bootstrap) {}],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLEVBQUUsVUFBQyxLQUFLO2FBQUssS0FBSyxDQUFDLElBQUksRUFBRTtLQUFBLENBQUMsQ0FBQzs7QUFRN0QsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0dBQ3hDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcclxuICBhdXJlbGlhLnVzZVxyXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKClcclxuICAgIC5wbHVnaW4oJ2F1cmVsaWEta2VuZG91aS1icmlkZ2UnLCAoa2VuZG8pID0+IGtlbmRvLmNvcmUoKSk7XHJcbiAgLy9VbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgdG8gZW5hYmxlIGFuaW1hdGlvbi5cclxuICAvL2F1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKTtcclxuICAvL2lmIHRoZSBjc3MgYW5pbWF0b3IgaXMgZW5hYmxlZCwgYWRkIHN3YXAtb3JkZXI9XCJhZnRlclwiIHRvIGFsbCByb3V0ZXItdmlldyBlbGVtZW50c1xyXG5cclxuICAvL0FueW9uZSB3YW50aW5nIHRvIHVzZSBIVE1MSW1wb3J0cyB0byBsb2FkIHZpZXdzLCB3aWxsIG5lZWQgdG8gaW5zdGFsbCB0aGUgZm9sbG93aW5nIHBsdWdpbi5cclxuICAvL2F1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1odG1sLWltcG9ydC10ZW1wbGF0ZS1sb2FkZXInKVxyXG5cclxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=