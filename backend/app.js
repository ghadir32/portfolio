var express =  require('express');
var app = express();
var mysql = require('mysql2');
var config = require('./config');
const router = express.Router();


var port = process.env.PORT || 3000;

// app.use('/assets', express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');

var db = mysql.createConnection(config.getDbConnectionString());

// app.get('/',function(req,res) {
//     res.render('index');
// });

app.get('/', function(req, res){
  
  let query = "Select * from doctor;";

    db.query(query, function(error, results){
        if(error){
              res.status(400).send(error);
        }else{
            res.send(results);
        }
    } );
});


// app.post('updateData', function(req, res){

//     let data = req.body;
//     let query = `update doctor set fname='${data.name}' `;

//     db.query(query, function(error, results){
//         if(error){
//             res.status(400).send(error);
//         }else{
//             res.send(results);
//         }
//     });

// });


app.listen(port);