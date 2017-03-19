angular.module('app').directive('person', function() {
        return {
            scope: {
                person: '=', 
                action: '&'
            },
            restrict: 'E', 
            template: 'Pen Name: <input type="text" ng-model="person.name" class="form-control" />' + 
            'Pen Name: <input type="text" ng-model="person.penName" class="form-control" />' + 
            '<input type="button" ng-click="action()" value="Action" class="btn btn-primary" />' +
            '<pre>{{person | json}}</pre>', 
            link: function(scope, element, attrs) {
                element.bind('mouseenter', function() {
                    element.css('background-color', 'red')
                });
            
                element.bind('mouseleave', function() {
                    element.css('background-color', 'silver')
                });
            }
        };
});
