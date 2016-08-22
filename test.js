var pathToRegexp = require('path-to-regexp');

var keys = [];
var re = pathToRegexp('/:foo/:bar', keys);

var result = re.exec('/test/route');
if (result) {
        for(var i = 0;i < keys.length;i++){
            console.log( keys[i].name + ":" + result[i+1]);
        }
}

console.log(JSON.stringify(keys));
console.log(result);