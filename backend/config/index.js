var configVal = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return 'mysql://' + configVal.user + 
        ':' + configVal.password + '@localhost:3306/' + configVal.database;
    }
}
