angular.module('home',['ui.grow']);

angular.module('home')
    .controller('IndexController',IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope){
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;
    $scope.myForm = {};


    function salvar() {
        if ($scope.myForm.$invalid === true) {
            alert('Verifique os campos inválidos');
            return;
        }

        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        alert('Registro salvo com sucesso!');

    }
    function limpar(){

    }

}
