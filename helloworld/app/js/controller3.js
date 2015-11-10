angular.module('senai',[]);

angular.module('senai')
    .controller('IndexController',IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope) {
    //$scope.carro = [];
    $scope.carro.nome = '';
    $scope.carro.cor = '';

    function adicionarcarro()
    {
        carro.nome
        carro.cor.push();
    }
}