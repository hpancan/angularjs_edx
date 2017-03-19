app.controller('uibController', ['$scope', 
   function ($scope) { 
      $scope.alerts = [];
      $scope.alerts.push({
              'msg': 'Hello there!',
              'type': 'success',  
      });
      $scope.alerts.push({
              'msg': 'Whoa there!',
              'type': 'warning'
      });
      
      $scope.closeAlert = function(index){
          console.log('Closed Alert ' + index);
      }
   } 
]);
