var express = require('express');
var jwt = require('jsonwebtoken')
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
const multer = require('multer')
const mkdirp = require('mkdirp')
const upload = multer({dest:'./uploads'})
app.use(bodyParser.json())
app.use(cors());
const port =3002;
 
// SELECT tutor_pl.title FROM tutor_pl INNER JOIN courses_pl ON tutor_pl.course_id=courses_pl.course_id & courses_pl.user_id=tutor_pl.user_id =1

// import routes 
 app.use(bodyParser.urlencoded(
    { 
    extended:true 
    } 
 ));
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() +"sudhir"+ file.originalname)
    }
  })
  
  var upload_file = multer({ storage: storage })
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
app.get('/user/tutor', function (req, res) {
    dbCon.query('SELECT * FROM `user_pl`', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
 
 });

 app.get('/user/student', function (req, res) {
    dbCon.query('SELECT * FROM `user_pl`  WHERE `role_id` = 10 ?', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
 
 });

//................user login signup api................
app.post('/signup/student', (req, res) => { 
    let data = {
              name: req.body.name,
              email: req.body.email,
              contact:req.body.contact,
              password:req.body.password,
              role_id:"30"
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

app.post('/signup/tutor', (req, res) => { 
    let data = {
              name: req.body.name,
              email: req.body.email,
              contact:req.body.contact,
              password:req.body.password,
              role_id:"20"
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
    const token = jwt.sign({data}, 'jwt_secret_key')
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
          "response": results,
          "token":token
         }));
        } else{
            res.send(JSON.stringify( 
                {
                "status": 200,
                "error": null,
                "message":true,
                "user_exist":false, 
                "response": results,
                "token":null

               }));
        } 
    });
    }
 });

 app.get('/viewallcourse', function (req, res) {
    dbCon.query('SELECT * FROM `courses_pl`  WHERE `role_id` = 10 ?', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
 
 });
 app.get('/viewalluser', function (req, res) {
    dbCon.query('SELECT * FROM `user_pl`  WHERE `role_id` = 10 ?', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
 });
 app.get('/getcat', function (req, res) {
    dbCon.query('SELECT * FROM `category_pl`', function (error, results, fields) {
        if (error) throw error;
        // return res.send({ error: false, result: results, message: 'users list.' });
        return res.send(results);
    });
 });
 app.get('/getcourses', function (req, res) {
    dbCon.query('SELECT * FROM `courses_pl` WHERE `user_id` = 1', function (error, results, fields) {
        if (error) throw error;
        // return res.send({ error: false, result: results, message: 'users list.' });
        return res.send(results);
    });
 });
app.get('/', function (req, res) { 
return res.send({
    error:true, 
    msg:"hello this is sudhir ..."
}) 
})
// upload files
// app.post('/uploadfile', upload.single('tut_file'), (req, res, next) => {
//     const file = req.file
//     console.log(file.path)
//     if (!file) {
//       const error = new Error('Please upload a file')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(file)
    
//   })

//upload file 
app.post('/uploadfile', upload.single('file_name'), (req, res) => {
    let data =  JSON.parse(JSON.stringify(req.body))
    console.log(req.file); 
    console.log(data)
     
    if (!data.demo_file || !data.course_title) {
        console.log("errrrrr....") 
        return res.status(400).send({ error: require-field, message: 'Please provide all details'});
    } else { 
       let sql = "INSERT INTO `courses_pl` SET ?";
       let query = dbCon.query(sql,
         {
            cat_id:data.cat_id,
            file_name:data.demo_file,
            demo_file:"uploads/"+data.demo_file,
            course_name: data.course_title
        },(err, results) => {
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

app.post('/uploadfiles', upload_file.single('demo_file'), (req, res) => {
    let data =  JSON.parse(JSON.stringify(req.body))
    console.log(req.file);
    console.log(data)
    var course_upload = {
        title: data.title, 
        course_name: data.course_title,
        description:data.course_description,
        file_name:req.file.originalname,
        demo_file:req.file.path,
        cat_id:data.cat_id,
        user_id:data.user_id 
    }
    console.log(course_upload)
    if (!data.title || !data.course_name || !req.file.path) {
        console.log("errrrrr....") 
        return res.status(400).send({ error: require-field, message: 'Please provide all details'});
    } else { 
       let upload_sql = "INSERT INTO `courses_pl` SET ?";
       let upload_query = dbCon.query(upload_sql, course_upload, (err, results) => {
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
//..........

var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../frontend/src/uploads')
  }, 
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
 var upload1 = multer({ storage: storage1 }).single('file')

app.post('/upload',function(req, res) {   
    upload1(req, res, function (err) {
    console.log(req.body)   
    console.log(req.file)  
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
           let sql2 = "INSERT INTO `courses_pl` SET ?";
           let query = dbCon.query(sql2,
             {
                cat_id:req.body.cat_id,  
                file_name:req.file.originalname,
                demo_file:"../uploads/"+req.file.filename,
                course_name: req.body.course_title,
                description:req.body.course_description
            },(err, results) => {
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
            
  

    )

});
//.......

var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../frontend/src/uploads')
  }, 
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
 var upload1 = multer({ storage: storage1 }).single('file')

app.post('/uploadcourse',function(req, res) {   
    upload1(req, res, function (err) {
    console.log(req.body)   
    console.log(req.file)   
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
           let upload_course_sql = "INSERT INTO `tutor_pl` SET ?";
           let query = dbCon.query(upload_course_sql,
             {
                course_id:req.body.course_id,  
                course_file:"../uploads/"+req.file.filename,
                title: req.body.course_title
             },(err, results) => {
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
            
  

    )

});

app.listen(port,()=>{
    console.log("server is running at :" + port)
    }); 
