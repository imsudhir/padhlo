import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import axios from 'axios'; 

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
  const initialState = {
    course:{
      cat_id:'',              
      course_title:'',
      course_description:'',
      selectedFile: null
      // demo_file:''
  },
  validation:{
      course_titleValid:false,
      course_descriptionValid:false,
      demo_fileValid:false,
},
isRedirect:false };

class Createnewcourse extends Component {
    constructor(){
        super();  
        this.state = {
            course:{
                cat_id:'',              
                course_title:'',
                course_description:'',
                selectedFile: null
                // demo_file:''
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
      alert(e.target.value);
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
        console.log(this.state)
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

    // console.log(this.state.course)
    // console.log(this.state.validation.nameValid)
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
handleDemo_file=event=>{
  alert(event.target.value)
  this.setState({
    ...this.state,
       course:{
         ...this.state.course,
         selectedFile: event.target.files[0],

        },
      validation:{
           ...this.state.validation,
         },
      loaded: 0         
    }) 
  console.log(this.state.course.selectedFile)
  // console.log(event.target.files[0])
 
}

handleDemo_file1 = (e)=> {
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
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
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
console.log(this.state)
if(this.state.validation.course_titleValid && this.state.validation.course_descriptionValid){

  const data = new FormData()
  data.append('cat_id', this.state.course.cat_id)
  data.append('course_title', this.state.course.course_title)
  data.append('course_description', this.state.course.course_description)
  data.append('file', this.state.course.selectedFile)
  console.log(JSON.stringify(data)) 
  // console.log(this.state.selectedFile)
  axios.post("http://localhost:3002/upload", data, {
      // receive two parameter endpoint url ,form data
      // console.log(data3)
  })
.then(res => { 
  console.log(res)
  if(res.status===200){ 
  toast.success('Successfully Created New post')
  // this.reset();
  }
})
.catch(err => { 
  toast.error('upload failed')
})

}else{
alert("Please Enter All required entry");
}
}
reset = () =>{
  this.setState({
course:{
      cat_id:'',              
      course_title:'',
      course_description:'',
      selectedFile: null 
      // demo_file:''
  },
  validation:{
      course_titleValid:false,
      course_descriptionValid:false,
      demo_fileValid:false
},
isRedirect:false

  })
}
render() {
  return (
 <React.Fragment>
  <Form  onSubmit = {this.handleCreateCourse}>
  <h1>Create New Course</h1>
    <FormGroup>
      <Input type="select" onChange={this.handleCategory}>
          <option>Select category</option>
          <optgroup label="php">Php</optgroup>
              <option value="1">&nbsp; &nbsp;&nbsp;&nbsp;core php</option>
                <option value="2">&nbsp; &nbsp;&nbsp;&nbsp;CodeIgniter</option>
               <option value="5">&nbsp; &nbsp;&nbsp;&nbsp;Cake php</option>
              <option value="6">&nbsp; &nbsp;&nbsp;&nbsp;Laravel</option>
          <optgroup label="Graphic design">Php</optgroup>
              <option value="7">&nbsp; &nbsp;&nbsp;&nbsp;Adobe</option>
              <option value="8">&nbsp; &nbsp;&nbsp;&nbsp;Illusterater</option>
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
        <input type="file" name="file" onChange={this.handleDemo_file}/>
        <div class="form-group">
   <ToastContainer />
</div>
            {/* <Input type="file" name="demo_file" onChange={this.handleDemo_file} id="demo_file" required={true} placeholder="upload file" /> */}
            <span id="demo_file_error" style={{color:"red", display:"none"}}>Enter correct File</span>
        </FormGroup>
        <Button type="submit" color="primary" size="md" block>Create</Button>
    </Form>
  </React.Fragment>
      );
  } 
}

export default Createnewcourse;