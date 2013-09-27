'use strict';

angular.module('PayPackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('llegue a este controller :: MainCtrl');
    navigator.notification.vibrate(2500);

  });
