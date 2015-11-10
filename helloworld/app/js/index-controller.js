angular.module('senai',[]);

angular.module('senai')
    .controller('IndexController',IndexController);

function IndexController($scope){
    $scope.nome = 'Marcos';

    $scope.click = function() {
        if ($scope.nome =='Aurelio')
            $scope.nome = 'Marcos';
        else
            $scope.nome = 'Aurelio';
    }
    }

function maiusculo(){

}