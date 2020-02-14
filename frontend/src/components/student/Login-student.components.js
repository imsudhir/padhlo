import classnames from 'classnames';
import React, { Component } from 'react';
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
  
class Studentlogin extends Component {
  constructor(){
    super(); 
    this.state = {
        user:{
            email:'',
            password:''
        },
        validation:{
            emailValid:false,
            passwordValid:false
      },
      isRedirect:false
    }
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
 document.getElementById("emailerrorr").style.display="none";
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
 document.getElementById("emailerrorr").style.display="block";
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
      console.log(this.state);
        e.preventDefault();
        if(this.state.nameValid && this.state.emailValid && this.state.ratingValid && this.state.addressValid){
        fetch("http://localhost:3002/login",
        {
            method : "Post", 
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {result.json().then((res)=>{
          alert("New User created Successfully")
        })
    })
    console.log(this.state);
  }else{
      alert("Please Enter All required entry");
    }
  }
   
    render() {
        return (
    <div>
    <Form  onSubmit = {this.handleSubmit}>
    <h1>Student</h1>
    {/* <container> */}
      <Row form>
      <Col lg="4"></Col>
        <Col lg="4">
        <FormGroup>
            {/* <Label for="restaurantEmail">Email</Label> */}
            <Input type="email" name="email"
            onChange={this.handleEmail} id="restEmail" required="true" value={this.state.user.email} placeholder="Email" />
            <span id="emailerror" style={{color:"red", display:"none"}}>Enter correct Email</span>
          </FormGroup>
        </Col>
      </Row>
     <Row form>
      <Col lg="4"></Col>
      <Col lg="4">
      <FormGroup>
        {/* <Label for="restaurantAddress">Address</Label> */}
        <Input type="password" name="address" onChange={this.handlePassword} id="restddress" required="true" value={this.state.user.password} placeholder="Password"/>
        <span id="passworderror" style={{color:"red", display:"none"}}>Password must have at least one digit (length 5-20)</span>
      </FormGroup>
      </Col>
      <Col lg="4"></Col>
     </Row>
     <Row >
      <Col lg="4"></Col>
      <Col lg="4">
      {/* <FormGroup> */}
     <Button color="primary" size="md" block>Sign up</Button>
      {/* </FormGroup> */}
      </Col>
      <Col lg="4"></Col>
     </Row>
    {/* </container> */}
    </Form>
    </div>
        );
    } 
}
 
export default Studentlogin;