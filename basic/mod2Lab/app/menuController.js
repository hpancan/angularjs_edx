app.controller('menuController', [
    '$scope', 
    function($scope) {
        $scope.model = {title:'Our Menu'};
        $scope.model.mainDish = {};

        $scope.$watch('model.mainDish.name', function(newValue, oldValue){
            if(newValue == 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        }); 

        $scope.changeMainDish = function(nm, pr) {
            $scope.model.mainDish.name = nm;
            $scope.model.mainDish.price = pr;
        }
    }
]);