define(['ojs/ojcore','knockout', 'ojs/ojdialog','ojs/ojarraytreedataprovider'], function(oj,ko) {
  'use strict';

  var PageModule = function PageModule() {};

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.openDialog = function (arg1) {
     console.log(document.getElementById('modalDialog'));
      document.getElementById('modalDialog').open();
  };

  return PageModule;
});
