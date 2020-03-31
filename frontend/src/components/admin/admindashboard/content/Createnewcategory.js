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
    category_title:/^[a-z\d ]{4,20}$/i,
    category_description:/^[a-z\d ]{20,200}$/i
  }

class Createnewcat extends Component {
    constructor(){
        super();  
        this.state = {
            category:{
                category_title:'',
                category_description:''
            },
            validation:{
                category_titleValid:false,
                category_descriptionValid:false
          },
          isRedirect:false 
        }
    }
    
    handleCategory_Title = (e) => {
    this.setState({
      ...this.state,
         category:{
           ...this.state.category,
           category_title:e.target.value 
         },
        validation:{
             ...this.state.validation,
             category_titleValid:false

           }
      }) 
  if(patterns.category_title.test(e.target.value)){
    document.getElementById("category_title_error").style.display="none";
    this.setState({
      ...this.state,
         category:{
           ...this.state.category,  
           category_title:e.target.value 
         },
        validation:{
             ...this.state.validation,
             category_titleValid:true
           }
      }) 
  } else{
    this.setState({
      ...this.state,
         category:{
           ...this.state.category,  
           category_title:e.target.value 
         },
        validation:{
             ...this.state.validation,
             category_titleValid:false
           }
      }) 
    console.log("plz enter correct title")
    document.getElementById("category_title_error").style.display="block";
  }
}

handleCourse_desc = (e) => {
    this.setState({
      ...this.state,
         category:{
           ...this.state.category,
           category_description:e.target.value 
         },
        validation:{
             ...this.state.validation
           }
      }) 
  if(patterns.category_description.test(e.target.value)){
    document.getElementById("category_description_error").style.display="none";
    this.setState({
      ...this.state,
         category:{
           ...this.state.category,  
           category_description:e.target.value 
         },
        validation:{
             ...this.state.validation,
             category_descriptionValid:true
           }
      })
  } else{
    this.setState({
      ...this.state,
         category:{
           ...this.state.category,  
           category_description:e.target.value 
         },
        validation:{
             ...this.state.validation,
             category_descriptionValid:false
           }
      }) 
    console.log("plz enter correct title")
    document.getElementById("category_description_error").style.display="block";
  }
}

handleCreateCat = (e)=>{
// alert(JSON.stringify(this.state.category));
e.preventDefault();
console.log(this.state); 
// console.log(this.state.category)
if(this.state.validation.category_titleValid && this.state.validation.category_descriptionValid){
  // console.log(this.state.selectedFile)
  axios.post("http://localhost:3002/createnewcat", this.state.category, {
      // receive two parameter endpoint url ,form data
  })
.then(res => { 
  console.log(res)
  if(res.status===200){ 
  toast.success('Created Successfully')
   this.reset();
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
category:{
      category_title:'',
      category_description:''
  },
  validation:{
      category_titleValid:false, 
      category_descriptionValid:false
},
isRedirect:false
  })
}
render() {
  const  {result} = this.state.category
  return (
 <React.Fragment>
  {/* {console.log(category)} */}
  <Form  onSubmit = {this.handleCreateCat}>
  <h4 style={{boxShadow : "-1px 1px 5px rgba(0, 0, 0, 0.9)", padding:"8px", background:"#007bff", color:"#f7f8fc"}}>
Create New Category  </h4>
        <FormGroup>
            <Input type="text" name="category_title" onChange={this.handleCategory_Title} id="category_title" required={true} value={this.state.category.category_title} placeholder="Title" />
            <span id="category_title_error" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 4 chars)</span>
        </FormGroup>
        <FormGroup>
            <Input type="text" name="category_description" onChange={this.handleCourse_desc} id="category_description" required={true} value={this.state.category.category_description} placeholder="Description" />
            <span id="category_description_error" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 20 to 200 chars)</span>
        </FormGroup>
         <div class="form-group">
        <ToastContainer />
        </div>
            <span id="demo_file_error" style={{color:"red", display:"none"}}>Enter correct File</span>
        <Button type="submit" color="primary" size="md" block>Create</Button>
    </Form>
  </React.Fragment>
      );
  } 
}

export default Createnewcat;