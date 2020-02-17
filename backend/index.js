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

//................user login signup api................
app.post('/signup/student', (req, res) => { 
    let data = {
              name: req.body.name,
              email: req.body.email,
              contact:req.body.contact,
              password:req.body.password,
              role_id:"10"
           };
    // console.log(data.email);
    // console.log(data);
    if (!data.email || !data.password) {
        console.log("errrrrr....")
        return res.status(400).send({ error: user, message: 'Please provide all details'});
    }
     else
    {
       let duplicacy_check = "SELECT `email` FROM `user_pl` WHERE `email` = ?"
       dbCon.query(duplicacy_check, [data.email], function (err, result) {
        if (err) throw err;
        var check = result;
        var found_duplicate = result.length === 0 ? true: false
        console.log(result.length);
        console.log(result);
        if(!result.length) { 
       let sql = "INSERT INTO `user_pl` SET ?"
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
         }
         else {
                res.send(JSON.stringify( 
                    {
                    "status": 200, 
                    "error": true, 
                    "recurring_email":true,
                    "message":"duplicate email"
                   }));
            }
      });
    } 
});
 
app.post('/login', function (req, res) {
    const data = req.body;
    console.log(data)
    if (!data.email || !data.password) { 
        console.log("errrrrr....")
        return res.status(400).send({ error: user, message: 'Account does not exist'});
    } else {
    const login = "SELECT `email` , `role_id` FROM `user_pl` WHERE `email` = ? && `password` = ?"
    const query = dbCon.query(login, [data.email, data.password],(err, results) => {
      if(err) throw err;
      console.log(results)
      if(results.length){
      res.send(JSON.stringify( 
          {
          "status": 200,
          "error": null,
          "message":true,
          "user_exist":true, 
          "response": results
         }));
        } else{
            res.send(JSON.stringify( 
                {
                "status": 200,
                "error": null,
                "message":true,
                "user_exist":false, 
                "response": results
               }));
        } 
    });
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
