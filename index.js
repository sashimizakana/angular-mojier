require('angular');
var mojier = require('./release/main.js');

angular.module('app',[mojier]).controller('ctrl',function(mojier){
    var vm = this;
    vm.header = "test";
    vm.aliases = mojier.getAllAliases();
    vm.emojify = function(alias){
        vm.emoji = ":" + alias + ":";
    };
});
