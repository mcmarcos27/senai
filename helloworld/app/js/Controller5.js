//angular.module('senai',[]);

//angular.module('senai')
   // .controller('IndexController',IndexController);

/*

IndexController.$inject = ['$scope','$growl','$filter'];

function IndexController ($scope, $growl, $filter){
    $scope.entidade = [];
    $scope.listaDePessoas = [];
    $scope.limpar = limpar();



}*/

angula.module('senai')
    .filter('maiusculo', maiusculo);


function maiusculo(){
    return function(input){
        if (input && typeof input === 'string' ){
            return input.toUpperCase();
        }
        return input;
    }

}

angula.module('senai')
    .filter('minusculo', minusculo);

function minusculo(){
    return function(input){
        if (input && typeof input === 'string' ){
            return input.toLowerCase();
        }
        return input;
    }

}