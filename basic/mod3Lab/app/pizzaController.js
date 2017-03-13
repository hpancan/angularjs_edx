app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { 
            title: 'Pizza Builder', 
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 
            'Mushrooms', 'Onion', 'Olives', 'Green Pepers'], 
            toppings:[], 
            toppingAdded:false
        };

        $scope.addTopping = function(topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search=null;
            $scope.model.toppingAdded=true;
        }

        $scope.closeToppingAddedMessage = function() {
            $scope.model.toppingAdded=false;
        }
    }
]);