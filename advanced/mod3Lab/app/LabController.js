angular.module('app')
.controller('LabController', [ 
   function () { 
      var vm = this; 
      
      vm.alerts = [];
      
      vm.addDanger = function() {
          addAlert('danger', 'Danger, will Robinson! Danger!');
      };
      
      vm.addWarning = function() {
          addAlert('warning', 'Warning! Warning! Alien approaching!');
      };
      
      vm.dismissAlert = function(index) {
          vm.alerts.splice(index,1);
      };
      
      vm.datepickerOptions = {
          minDate: new Date(), 
          showWeeks: false
      };
      
      vm.selectedDate = new Date();
      
      function addAlert(type, text) {
          vm.alerts.push({type:type, text:text});
      }
   } 
]);
