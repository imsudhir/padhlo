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
app.get('/tutor', function (req, res) {
   dbCon.query('SELECT * FROM `tutor_pl`', function (error, results, fields) {
       if (error) throw error;
       return res.send({ error: false, data: results, message: 'users list.' });
   });

});
 
// retrive tutor by id 
app.get('/tutor/:id', function (req, res) {
   let user_id = req.params.id;
   if (!user_id) {
    return res.status(400).send({ error: true, message: 'Please provide user_id' });
   }
   dbCon.query('SELECT * FROM `tutor_pl` where id=?', user_id, function (error, results, fields) {
    if (error) throw error;
     return res.send({ error: false, data: results[0], message: 'users list.' });
   }); 
});

// add/create/signup tutor 
app.post('/addtutor', (req, res) => {
//    let data = {
//       name: req.body.name,
//       email: req.body.email 
//    };  
let data = req.body;
console.log(data.email);
if (!data.name || !data.email || !data.password) {
    console.log("errrrrr....")
    return res.status(400).send({ error: user, message: 'Please provide all details'});
} else {
   let sql = "INSERT INTO `tutor_pl` SET ?"; 
   let query = dbCon.query(sql, data,(err, results) => {
     if(err) throw err;
     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
   });
} 
 });

//  Update user with id
app.put('/update', function (req, res) {
  let data = {
   id : req.body.id, 
   name : req.body.name,
   email : req.body.email 
  } 
   console.log(data); 
   if (!data.id || !data.name || !data.email) {
       return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
   }
   dbCon.query("UPDATE `tutor_pl` SET `name`=?,`email`=? WHERE id = ?", [data.name, data.email, data.id], function (error, results, fields) {
       if (error) throw error;
       return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
   });
});

//  Delete user
app.delete('/delete/:id', (req, res) => { 
   user_id = req.params.id;
   console.log(user_id)
   if (!user_id) {
       return res.status(400).send({ error: true, message: 'Please provide user_id' });
   }
   dbCon.query('DELETE FROM `tutor_pl` WHERE id = ?', [user_id], function (error, results, fields) {
       if (error) throw error;
       return res.send({ error: false, data: results, message: 'User has been deleted successfully.' });
   });
}); 

//................student login signup api................
// add/create/signup student
app.post('/addstudent', (req, res) => {
    let data = req.body;
    console.log(data.email);
    if (!data.name || !data.email || !data.contact || !data.password) {
        console.log("errrrrr....")
        return res.status(400).send({ error: user, message: 'Please provide all details'});
    } else {
       let sql = "INSERT INTO `student_pl` SET ?"; 
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
     });

//  Update student with id
app.put('/updatestudent/:id', function (req, res) {
    // let data = {
    //  id : req.body.id, 
    //  name : req.body.name, 
    //  email : req.body.email 
    // } 
     data = req.body;
     console.log(data);
    //  console.log(req.params.id); 
     if (!req.params.id || !data.name || !data.email || !data.contact || !data.password) {
         return res.status(400).send({ error: user, message: 'Please provide all required user info' });
     }
     dbCon.query("UPDATE `student_pl` SET `name`=?,`email`=?,`contact`=?,`password`=? WHERE id = ?", [data.name, data.email, data.contact, data.password, req.params.id], function (error, results, fields) {
         if (error) throw error;
         return res.send(
             { error: false, 
               data: results,
               message: 'student has been updated successfully.' 
            });
     });
  });


//  Delete student
app.delete('/deletestudent/:id', (req, res) => { 
    user_id = req.params.id;
    console.log(user_id)
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbCon.query('DELETE FROM `student_pl` WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been deleted successfully.' });
    });
 });
 
 // retrive student list
app.get('/student', function (req, res) {
    dbCon.query('SELECT * FROM `student_pl`', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'student list.' });
    });
 
 });
 
 // retrive student by id 
 app.get('/student/:id', function (req, res) {
    let user_id = req.params.id;
    if (!user_id) {
     return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbCon.query('SELECT * FROM `student_pl` where id=?', user_id, function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results[0], message: 'users list.' });
    }); 
 });
// set port
// app.listen(3000, function () {
//    console.log('Node app is running on port 3000');
// });
//upload file 
app.post('/uploads', upload.single('file_name'), (req, res) => {
    let data =  JSON.parse(JSON.stringify(req.body))
    console.log(req.files); 
    console.log(data)
    if (!data.title || !data.course_name) {
        console.log("errrrrr....") 
        return res.status(400).send({ error: require-field, message: 'Please provide all details'});
    } else { 
       let sql = "INSERT INTO `courses_pl` SET ?";
       let query = dbCon.query(sql, {title: data.title, file_name:req.files, course_name: data.course_name},(err, results) => {
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