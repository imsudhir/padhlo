import React, { Component } from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import {
    container,
    Table,
    Card,
    Row,
    Col,
    Button, Form, FormGroup, Label, Input, FormText, Alert
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});

let patterns = {
    course_title:/^[a-z\d ]{4,20}$/i,
    course_description:/^[a-z\d ]{20,200}$/i,
    allowedExtensions:/(\.jpg|\.jpeg|\.png|\.gif)$/i
  }

class Createnewcourse extends Component {
    constructor(){
        super();  
        this.state = {
            course:{
                cat_id:'',              
                course_title:'',
                course_description:'',
                demo_file:''
            },
            validation:{
                course_titleValid:false,
                course_descriptionValid:false,
                demo_fileValid:false,
          },
          isRedirect:false
        }
    }
    handleCategory = (e) =>{
      // alert(e.target.value);
      this.setState({
        ...this.state,
           course:{
             ...this.state.course,
             cat_id:e.target.value 
           },
          validation:{
               ...this.state.validation
             }
        }) 
    }
    handleCourse_Title = (e) => {
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,
           course_title:e.target.value 
         },
        validation:{
             ...this.state.validation
           }
      }) 
      console.log(this.state.course.course_title);

    console.log(this.state.course)
    console.log(this.state.validation.nameValid)
  if(patterns.course_title.test(e.target.value)){
    document.getElementById("course_title_error").style.display="none";
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,  
           course_title:e.target.value 
         },
        validation:{
             ...this.state.validation,
             course_titleValid:true
           }
      }) 
  } else{
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,  
           course_title:e.target.value 
         },
        validation:{
             ...this.state.validation,
             course_titleValid:false
           }
      }) 
    console.log("plz enter correct title")
    document.getElementById("course_title_error").style.display="block";
  }
}

handleCourse_desc = (e) => {
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,
           course_description:e.target.value 
         },
        validation:{
             ...this.state.validation
           }
      }) 
    console.log(this.state.course.course_description);
    console.log(this.state.course)
    console.log(this.state.validation.course_descriptionValid)
  if(patterns.course_description.test(e.target.value)){
    document.getElementById("course_description_error").style.display="none";
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,  
           course_description:e.target.value 
         },
        validation:{
             ...this.state.validation,
             course_descriptionValid:true
           }
      }) 
  } else{
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,  
           course_description:e.target.value 
         },
        validation:{
             ...this.state.validation,
             course_descriptionValid:false
           }
      }) 
    console.log("plz enter correct title")
    document.getElementById("course_description_error").style.display="block";
  }
}
handleDemo_file = (e)=> {
  alert(e.target.value.replace("C:\\fakepath\\", ""));
  this.setState({
    ...this.state,
       course:{
         ...this.state.course,
         demo_file:e.target.value.replace("C:\\fakepath\\", "")
       },
      validation:{
           ...this.state.validation
         }
    }) 
    // var fileInput = document.getElementById('file');
    // var filePath = fileInput.value;

    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  
  console.log(this.state.course.course_description);
  console.log(this.state.course)
  console.log(this.state.validation.course_descriptionValid)
if(patterns.allowedExtensions.test(e.target.value)){
  document.getElementById("demo_file_error").style.display="none";
  this.setState({
    ...this.state,
       course:{
         ...this.state.course,  
         demo_file:e.target.value.replace("C:\\fakepath\\", "")
       },
      validation:{
           ...this.state.validation,
           demo_fileValid:true
         }
    }) 
} else{
  this.setState({
    ...this.state,
       course:{
         ...this.state.course,  
         demo_file:e.target.value.replace("C:\\fakepath\\", "")
       },
      validation:{
           ...this.state.validation,
           demo_fileValid:false
         }
    }) 
  console.log("plz enter correct plz upload correct file")
  document.getElementById("demo_file_error").style.display="block";
}
}

handleCreateCourse = (e)=>{
alert(JSON.stringify(this.state.course));
e.preventDefault();
if(this.state.validation.course_titleValid && this.state.validation.course_descriptionValid){
fetch("http://localhost:3002/uploadfile",
{
    method : "Post", 
    headers : {
        'Content-Type':'application/json'
    },
    body : JSON.stringify(this.state.course)
}).then((result) => {result.json().then((res)=>{
  console.log(res);
  console.log("response from api");
  // if(!res.recurring_email){
  // alert("A new student created Successfully")
  // this.setState({
  //   ...this.state,
  //      user:{
  //        ...this.state.user,  
  //      },
  //     validation:{
  //          ...this.state.validation,
  //        },
  //   isRedirect:true
  //   })
  // } else{
  // document.getElementById("emailerrorr").style.display="block";
  // document.getElementById("emailerrorr").innerHTML = "This email allready exist..";
  // }
}) 
})
console.log(this.state.course);

}else{
alert("Please Enter All required entry");
}
}
render() {
  return (
 <React.Fragment>
  <Form  onSubmit = {this.handleCreateCourse}>
  <h1>Create New Course</h1>
    <FormGroup>
      <Input type="select" onChange={this.handleCategory} >
          <option>Select category</option>
          <optgroup label="php">Php</optgroup>
              <option value="1">&nbsp; &nbsp;&nbsp;&nbsp;core php</option>
                <option value="2">&nbsp; &nbsp;&nbsp;&nbsp;CodeIgniter</option>
               <option value="5">&nbsp; &nbsp;&nbsp;&nbsp;Cake php</option>
              <option value="6">&nbsp; &nbsp;&nbsp;&nbsp;Laravel</option>
          <optgroup label="Graphic design">Php</optgroup>
              <option>&nbsp; &nbsp;&nbsp;&nbsp;Adobe</option>
              <option>&nbsp; &nbsp;&nbsp;&nbsp;Illusterater</option>
      </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" name="course_title" onChange={this.handleCourse_Title} id="course_title" required={true} value={this.state.course.course_title} placeholder="Title" />
            <span id="course_title_error" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 4 chars)</span>
        </FormGroup>
        <FormGroup>
            <Input type="text" name="course_description" onChange={this.handleCourse_desc} id="course_description" required={true} value={this.state.course.course_description} placeholder="Description" />
            <span id="course_description_error" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 20 to 200 chars)</span>
        </FormGroup>
        <FormGroup>
            <Input type="file" name="demo_file" onChange={this.handleDemo_file} id="demo_file" required={true} placeholder="upload file" />
            <span id="demo_file_error" style={{color:"red", display:"none"}}>Enter correct File</span>
        </FormGroup>
        <Button type="submit" color="primary" size="md" block>Create</Button>
    </Form>
  </React.Fragment>
      );
  } 
}

export default Createnewcourse;