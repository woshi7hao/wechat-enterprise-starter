var fs = require('fs');

var output = {
    cache: function(path, data) {
        var file = fs.realpathSync('.') + path;
        console.log(file);
        fs.open(file,"w",function(e,fd){
            if(e){
                // throw e;
            } else {
                fs.write(fd, JSON.stringify(data), 0, 'utf8', function(e){
                    if(e){
                        // throw e;
                    } else {
                        fs.closeSync(fd);
                        console.log("Cache data to " + path + " success!");
                    }
                });
            }
        });
    }
};

module.exports = output;