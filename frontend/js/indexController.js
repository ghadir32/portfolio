//my routes
portfolio.controller('homeController', ['$scope', function($scope){

    $scope.val = false;

    $scope.enable = function(){
       if( $scope.val == false){
             return true;
       }else{
                return false;
       }
 

    }
     
}]);
