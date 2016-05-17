(function() {
  'use strict';

  angular
    .module('stationfy')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $httpProvider, $fancyModalProvider) {
    // Enable log
    $httpProvider.interceptors.push('authInterceptor');
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $fancyModalProvider.setDefaults({
        themeClass: 'fancy-modal-theme-default',
        openingOverlayClass: 'fancy-modal-body'
    });
  }

})();
