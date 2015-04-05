function mojierFilter(mojier){
    return function(input){
        var matches = null;
        if(!input || !(matches = input.match(/:(.*?):/g))){
            return input;
        }

        for(var i=0;i<matches.length;i++){
            var emoji = mojier.get(matches[i].replace(/:/g,""));
            if(emoji){
                input = input.replace(matches[i],emoji);
            }
        }
        return input;
    };
}

angular.module('sakana.mojier.filter',['sakana.mojier.service']).filter('mojier',mojierFilter);
