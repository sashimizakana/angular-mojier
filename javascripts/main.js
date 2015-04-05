angular.module('app',['sakana.mojier']).controller('ctrl',function(mojier){
    var vm = this;
    vm.search = "sushi";
    vm.aliases = mojier.getAllAliases();
    vm.text = "Hello! :smile::smile::smile:\nAre you hungry?\n:doughnut::custard::pizza::meat_on_bone::curry::sushi:\n";
    vm.emoji = null;
    vm.insertEmoji = function(emoji){
        vm.text += ":" + emoji + ":";
    };
});
