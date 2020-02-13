var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql =require('mysql');
const multer=require('multer')
const upload =multer({dest:'./uploads'})
app.use(bodyParser.json())
app.use(cors());
const port =3002;
// import routes 
 app.use(bodyParser.urlencoded(
    { 
    extended:true
    } 
 ));
//  var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname)
//     }
//   })
  
//   var upload = multer({ storage: storage })
// connection configs 
 const dbCon = mysql.createConnection({
     host: 'localhost',
     user:'root',
     password:'',
     database: 'padhlo_db'
 });
 

//connect to db  
dbCon.connect();
//retrive all tutor list 

//................student login signup api................
// add/create/signup student
app.post('/signup/student', (req, res) => { 
    let data = {
              name: req.body.name,
              email: req.body.email,
              contact:req.body.contact,
              password:req.body.password,
              role_id:"10"
           };
    console.log(data.email);
    console.log(data);
    if (!data.name || !data.email || !data.contact || !data.password) {
        console.log("errrrrr....")
        return res.status(400).send({ error: user, message: 'Please provide all details'});
    } else {
       let sql = "INSERT INTO `user_pl` SET ?";
       let duplicacy_check = "SELECT `email` FROM `user_pl` WHERE `email` = ?"

       dbCon.query(duplicacy_check, [data.email], function (err, result) {
        if (err) throw err;
        console.log(result);
      });
      if(!duplicacy_check) {
       let query = dbCon.query(sql, data,(err, results) => {
         if(err) throw err;
         res.send(JSON.stringify( 
             {
             "status": 200, 
             "error": null,
             "message":true,
             "response": results
            }));
       }); 
    } else {
        res.send(JSON.stringify( 
            {
            "status": 200, 
            "error": true, 
            "message":"duplicate email"
           }));
    }
    } 
     });
  
app.get('/', function (req, res) { 
return res.send({
    error:true, 
    msg:"hello this is sudhir ..."
}) 
})

app.listen(port,()=>{
    console.log("server is running at :" + port)
    }); 