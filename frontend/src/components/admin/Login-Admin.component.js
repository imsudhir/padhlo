import classnames from 'classnames';
import React, { Component } from 'react';
import { Redirect, hashHistory} from 'react-router';
import Tutordash from "../../route/Tutordash";
import Admindash from "../../route/Admindash";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

// import { browserHistory } from 'react-router';

 
import axios from 'axios'; 
import {container,  TabContent, TabPane, Nav, NavItem,
   NavLink, Card, Button, CardTitle, CardText, Row, Col, 
   Table, Form, FormGroup, Label, 
   Input, FormText} from 'reactstrap'; 

   let patterns = {
    name:/^[a-z\d ]{4,20}$/i,
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    contact:/^(\+\d{2,4})?\s?(\d{10})$/,
    password:/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z@0-9]+){5,20}$/,
  }

class AdminLogin extends Component {
  constructor(props){
    super(props); 
    this.state = {
        user:{
            email:'',
            password:'',
            name:''
        },
        validation:{
            emailValid:false,
            passwordValid:false
      },
      isLoggedin:false,
      role_id:''
    }


}

componentDidMount()
{
  console.log(this.state)

  let Auth_token = localStorage.getItem('login_auth_token'); 
 
  console.log(Auth_token)
  if(Auth_token){
    console.log('token found')
    this.setState({
      ...this.state,
    isLoggedin:true 
  })
  } else {
    console.log('token not found')
  }

}
componentDidUpdate(){
  
}

login_auth(){
  axios.post("http://localhost:3002/adminlogin", { 
    "email":this.state.user.email,
    "password":this.state.user.password
   })
    .then(response => {
      if(response.data.token && response.data.user_exist){
        this.setState({
          ...this.state,
          isLoggedin:true,
          role_id: response.data.response[0].role_id
        })
        localStorage.setItem('login_auth_token', this.state.role_id);

  console.log(this.state)
  const Swal = require('sweetalert2')
  const MySwal = withReactContent(Swal)

  MySwal.fire({
    title: <p>Hello World</p>,
    footer: 'Copyright 2018',
    onOpen: () => {
      // `MySwal` is a subclass of `Swal`
      //   with all the same instance & static methods
      MySwal.clickConfirm()
    }
  }).then(() => {
    return (
      MySwal.fire(
        'Dear tutor',
        'Welcome to dashboard!',
        'success'
      )).then(()=>{
        return(window.location.reload(false))
      })

  })
  //...................
    // window.location.reload(false)
      } else {
        this.setState({
          ...this.state,
          user:{
            email:'',
            password:'',
            name:''
           },
          isLoggedin:false, 
         })
       
       document.getElementById("loginerror").style.display="block";
      }

      console.log(this.state)

    })
    .catch(error => this.setState({ error, isLoggedin: false }));
}

handleEmail = (e) => {
  console.log(e.target.value);
  this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        email:e.target.value 
      },
     validation:{
          ...this.state.validation
        }
   })
if(patterns.email.test(e.target.value)){
 document.getElementById("emailerror").style.display="none";
 this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        email:e.target.value 
      },
     validation:{
          ...this.state.validation,
          emailValid:true
        }
   })
} else{
 document.getElementById("emailerror").style.display="block";
 console.log("plz enter correct email")
 this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        email:e.target.value 
      },
     validation:{
          ...this.state.validation,
          emailValid:false
        }
   })
}
}

handlePassword = (e) => {
  console.log(e.target.value);
 document.getElementById("loginerror").style.display="none";
  this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        password:e.target.value 
      },
     validation:{
          ...this.state.validation,
        }
   })
if(patterns.password.test(e.target.value)){
 document.getElementById("passworderror").style.display="none";
 document.getElementById("loginerror").style.display="none";

 this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        password:e.target.value 
      },
     validation:{
          ...this.state.validation,
          passwordValid:true
        }
   })
} else{
 console.log("plz enter valid password")
 this.setState({
   ...this.state,
      user:{
        ...this.state.user,  
        password:e.target.value 
      },
     validation:{
          ...this.state.validation,
          passwordValid:false
        }
   })
 document.getElementById("passworderror").style.display="block";
}
}

handleSubmit = (e) => {

//.........................................................
    
      console.log(this.state);
        e.preventDefault();
        if(this.state.validation.emailValid && this.state.validation.passwordValid){        
        this.login_auth();
        }}
   
    render() {
        return (
    <React.Fragment>
       {this.state.role_id==10 ? (
        <React.Fragment>
        {/* {alert("Redireting..")} */}
       {<Redirect push to="/admindashboard/new" compone nt={Admindash}/>}
        {/* {window.top.location = window.top.location} */}
        {/* {this.props.history.push("/tutdashboard")} */}
           
         </React.Fragment>)
       : (this.state.role_id==20 ? 
       <Redirect push to="/tutdashboard/embed" compon ent={Tutordash}/>
        :''
        )}
    <Form st yle={{boxShadow:"3px 3px 9px 9px red"}} onSubmit = {this.handleSubmit}>
    <h2>Tutor</h2> 
    {/* <container> */}
      <Row form> 
      <Col sm="2" lg="4"></Col>
        <Col sm="8" md="8" lg="4">
          <FormGroup>
             <Input type="email" name="email" onChange={this.handleEmail} id="stdloginEmail" required={true} value={this.state.user.email} placeholder="Email" />
            <span id="emailerror" style={{color:"red", display:"none"}}>Enter correct Email</span>
          </FormGroup>
        </Col>
      <Col sm="2" md="2" lg="4"></Col>

      </Row>
     <Row form>
      <Col sm="2" md="2" lg="4"></Col>
      <Col sm="8" md="8" lg="4">
      <FormGroup>
         <Input type="password" name="stdloginpass" onChange={this.handlePassword} id="stdloginpass" autoComplete="off" required={true} value={this.state.user.password} placeholder="Password"/>
         <span id="passworderror" style={{color:"red", display:"none"}}>Password must have at least one digit (length 5-20)</span>
        <span id="loginerror" style={{color:"red", display:"none"}}>Incorrect login details !! try again.. </span>
      </FormGroup>
      </Col>
      <Col sm="2" md="2" lg="4"></Col>

     </Row>
     <Row >
      <Col sm="2" md="2" lg="4"></Col>
      <Col sm="8" md="8" lg="4">
      {/* <FormGroup> */}
     <Button color="primary" size="md" block>Login</Button>
      {/* </FormGroup> */}
      </Col>
      <Col sm="2" md="2" lg="4"></Col>
     </Row>
    {/* </container> */}
    </Form>
    </React.Fragment>
        );
    } 
}
 
export default AdminLogin;