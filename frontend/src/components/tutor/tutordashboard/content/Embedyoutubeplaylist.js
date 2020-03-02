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

class Categories extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchCategories() {
    fetch(`http://localhost:3002/getcat`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          category: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchCategories();
  }
  
  render() {
    const { isLoading, category, error } = this.state;
       return (
      <React.Fragment>
         {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          category.map(category => {
             const { cat_id, parent_id, category_name} = category;
            return (
              <React.Fragment>
            <option value={cat_id}>&nbsp; &nbsp;&nbsp;&nbsp;{category_name}</option>
               </React.Fragment>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

let patterns = {
    course_title:/^[a-z\d ]{4,20}$/i,
    course_description:/^[a-z\d ]{20,200}$/i,
    youtube_url:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
  }

class Embedyoutubeplaylist extends Component {
    constructor(){
        super();  
        this.state = {
            course:{
                cat_id:'',              
                course_title:'',
                course_description:'',
                youtube_url: null
                // demo_file:''
            },
            category:{
              cat_ids:[]
            },
            validation:{
                course_titleValid:false,
                course_descriptionValid:false,
                youtube_urlValid:false,
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

handleYoutube_url = (e) => {
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,
           youtube_url:e.target.value 
         },
        validation:{
             ...this.state.validation
           }
      }) 
  if(patterns.youtube_url.test(e.target.value)){
    document.getElementById("youtube_url_error").style.display="none";
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,
           youtube_url:e.target.value 
         },
        validation:{
             ...this.state.validation,
             youtube_urlValid:true
           }
      }) 
  } else{
    this.setState({
      ...this.state,
         course:{
           ...this.state.course,  
           youtube_url:e.target.value 
         },
        validation:{
             ...this.state.validation,
             youtube_urlValid:false
           }
      }) 
    console.log("plz enter correct title")
    document.getElementById("youtube_url_error").style.display="block";
  }
}


handleCreateCourse = (e)=>{
alert(JSON.stringify(this.state.course));
e.preventDefault();
// console.log(this.state)
console.log(this.state.course)
if(this.state.validation.course_titleValid && this.state.validation.course_descriptionValid){
  // console.log(this.state.selectedFile)
  axios.post("http://localhost:3002/youtubecourse", this.state.course, {
      // receive two parameter endpoint url ,form data
  })
.then(res => { 
  console.log(res)
  if(res.status===200){ 
  toast.success('Created Successfully')
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
  const  {result} = this.state.category
  return (
 <React.Fragment>
  {/* {console.log(category)} */}
  <Form  onSubmit = {this.handleCreateCourse}>
  <h1>Embed Youtube Playlist</h1>
    <FormGroup>
      <Input type="select" onChange={this.handleCategory}>
      <option>Select category</option>
        {<Categories />}
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
        <Input type="url" name="youtube_url" onChange={this.handleYoutube_url} id="youtube_url" required={true} value={this.state.course.youtube_url} placeholder="https://www.youtube.com/embed/videoseries?list=demo" />
        <span id="youtube_url_error" style={{color:"red", display:"none"}}>Enter correct url</span>
        </FormGroup>
        <div class="form-group">
        <ToastContainer />
        </div>
                {/* <Input type="file" name="demo_file" onChange={this.handleDemo_file} id="demo_file" required={true} placeholder="upload file" /> */}
            <span id="demo_file_error" style={{color:"red", display:"none"}}>Enter correct File</span>
        <Button type="submit" color="primary" size="md" block>Create</Button>
    </Form>
  </React.Fragment>
      );
  } 
}

export default Embedyoutubeplaylist;