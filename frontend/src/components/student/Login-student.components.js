import classnames from 'classnames';
import React, { Component } from 'react';
import {container,  TabContent, TabPane, Nav, NavItem,
   NavLink, Card, Button, CardTitle, CardText, Row, Col, 
   Table, Form, FormGroup, Label, 
   Input, FormText} from 'reactstrap';

let patterns = {
  name:/^[a-z\d ]{5,20}$/i,
  email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  rating:/^[1-5]{1}$/,
  contact:/^(\+\d{2,4})?\s?(\d{10})$/,
  address: /^[a-zA-Z0-9 ]{5,100}$/
}

class Studentlogin extends Component {
      constructor(){
          super();
          this.state = {
              name:'',
              email:'',
              rating:'', 
              address:'',
              nameValid:false,
              emailValid:false,
              ratingValid:false, 
              addressValid:false
          }
      }
     
  handleName = (e) => {
      console.log(this.state);
       this.setState({
        name:e.target.value
      })
    if(patterns.name.test(this.state.name)){
      document.getElementById("nameerror").style.display="none";
      this.setState({
        nameValid:true
      })
    } else{
      this.setState({
        nameValid:false
      })
      console.log("plz enter correct name")
      document.getElementById("nameerror").style.display="block";
    }
}

handleEmail = (e) => {
   console.log(e.target.value);
   this.setState({
    email:e.target.value
  })
if(patterns.email.test(e.target.value)){
  document.getElementById("emailerror").style.display="block";
  this.setState({
    emailValid:true
  })
} else{
  console.log("plz enter correct email")
  this.setState({
    emailValid:false
  })
  document.getElementById("emailerror").style.display="block";
}
}

handleSubmit = (e) => {
      console.log(this.state);
        e.preventDefault();
        if(this.state.nameValid && this.state.emailValid && this.state.ratingValid && this.state.addressValid){
        fetch("http://localhost:3002/addtutor",
        {
            method : "Post", 
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {result.json().then((res)=>{
          alert("New User created Successfully")
        //   this.setState({
        //     name:'',
        //     email:'',
        //     rating:'', 
        //     address:'',
        //     nameValid:false,
        //     emailValid:false,
        //     ratingValid:false, 
        //     addressValid:false
        // })
          
      // e.target.value=null
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
            onChange={this.handleEmail} placeholder ="Name" id="restEmail" required="true" value={this.state.email} placeholder="Email" />
            <span id="emailerror" style={{color:"red", display:"none"}}>Enter correct Email</span>
          </FormGroup>
        </Col>
      </Row>
     <Row form>
      <Col lg="4"></Col>
      <Col lg="4">
      <FormGroup>
        {/* <Label for="restaurantAddress">Address</Label> */}
        <Input type="password" name="address" onChange={this.handleAddress} id="restddress" required="true" value={this.state.address} placeholder="Password"/>
        <span id="addresserror" style={{color:"red", display:"none"}}>Enter correct Address(Don't use special chars)</span>
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