app.controller('labController', [
    '$scope', '$timeout', '$q', '$http', 'gitHub',
    function ($scope, $timeout, $q, $http, gitHub) {
        $scope.model={
            number:0,
            result:'Ready', 
            org:''
        };

        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;

        function getRepos(orgName) {
            $scope.model.repos = gitHub.getAll(
                {org:orgName}
            );
            $scope.model.repos.$promise.then(
                function(result){
                    $scope.model.repos = result;
                }, 
                function(result) {
                    $scope.model.repos = 'Error: ' + result;
                }
            );
        }

        function loadDetail(name, orgName) {
//            var url = 'https://api.github.com/repos/angular/' + name;
//            $http.get(url)
//                .then(function(response){
//                    $scope.model.detail = response.data;
//                }, function(response){
//                    $scope.model.detail = {error: true, message: 'Error: ' + response.data.message};
//                })

            $scope.model.detail = null;
            $scope.model.detail = gitHub.getDetail({id:name, org:orgName});
        }

        $scope.checkOddNumber = checkOddNumber;
        
        function checkOddNumber(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler(input).then(function(result) {
                $scope.model.result = 'Success: ' + result;
            }, function(result) {
                $scope.model.result = 'Error: ' + result;
            })
        }

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function() {
                if(isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                }else {
                    defer.reject('Not an oadd number');
                }
            }, 1000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input %2 == 1;
        }

    }
]);