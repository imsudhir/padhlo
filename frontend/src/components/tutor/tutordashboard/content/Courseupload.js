  import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';

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
      Button, Form, FormGroup, Label, Input, FormText
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

    class Courses extends React.Component {
      state = {
        isLoading: true,
        courses: [],
        error: null
      };
    
      fetchCourses() {
        fetch(`http://localhost:3002/getcourses`)
          .then(response => response.json())
          .then(data =>
            this.setState({
              courses: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
      componentDidMount() {
        this.fetchCourses();
      }
      
      render() {
        const { isLoading, courses, error } = this.state;
        console.log(courses)
          return (
          <React.Fragment>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              courses.map(courses => {
                const { course_id, parent_id, course_name} = courses;
                return (
                  <React.Fragment>
                  <option value={course_id}>&nbsp; &nbsp;&nbsp;&nbsp;{course_name}</option>
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
    
  class Courseupload extends Component {
    constructor(){
      super();  
      this.state = {
          course:{
              course_id:'',              
              course_title:'',
              selectedFile: null
              // demo_file:''
          },
          validation:{
              course_titleValid:false,
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
          course_id:e.target.value 
        },
        validation:{
            ...this.state.validation
          }
      }) 
      // console.log(this.state)
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

  handleDemo_file=event=>{
  // alert(event.target.value)
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

  handleCreateCourse = (e)=>{
  alert(JSON.stringify(this.state.course));
  e.preventDefault();
  console.log(this.state)
  if(this.state.validation.course_titleValid){

  const data = new FormData()
  data.append('course_id', this.state.course.course_id)
  data.append('course_title', this.state.course.course_title)
  data.append('file', this.state.course.selectedFile)
  console.log(JSON.stringify(data)) 
  // console.log(this.state.selectedFile)
  axios.post("http://localhost:3002/uploadcourse", data, {
    // receive two parameter endpoint url ,form data
    // console.log(data3)
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
    course_id:'',              
    course_title:'',
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
  <h1>Upload Tutorials</h1>
  <FormGroup>
    <Input type="select" onChange={this.handleCategory}>
    <option>Select Course</option>
      {<Courses />}
        
    </Input>
      </FormGroup>
      <FormGroup>
          <Input type="text" name="course_title" onChange={this.handleCourse_Title} id="course_title" required={true} value={this.state.course.course_title} placeholder="Title" />
          <span id="course_title_error" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 4 chars)</span>
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

  export default Courseupload;
