function mojierFilter(mojier){
    return function(input,prefix,suffix){
        prefix = prefix || "";
        suffix = suffix || "";
        var matches = null;
        if(!input || !(matches = input.match(/:(.*?):/g))){
            return input;
        }

        for(var i=0;i<matches.length;i++){
            var emoji = mojier.get(matches[i].replace(/:/g,""));
            if(emoji){
                input = input.replace(matches[i],prefix + emoji + suffix);
            }
        }
        return input;
    };
}

angular.module('sakana.mojier.filter',['sakana.mojier.service']).filter('mojier',mojierFilter);
