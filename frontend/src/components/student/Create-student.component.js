import classnames from 'classnames';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {container, TabContent, TabPane, Nav, NavItem,
   NavLink, Card, Button, CardTitle, CardText, Row, Col, 
   Table, Form, FormGroup, Label, 
   Input, FormText} from 'reactstrap';
   import Studentlogin from "./Login-student.components";

let patterns = {
  name:/^[a-z\d ]{4,20}$/i,
  email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  contact:/^(\+\d{2,4})?\s?(\d{10})$/,
  password:/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z@0-9]+){5,20}$/,
}

class Createstudent extends Component {
      constructor(){
          super(); 
          this.state = {
              user:{
                  name:'',
                  email:'',
                  contact:'', 
                  password:''
              },
              validation:{
                  nameValid:false,
                  emailValid:false,
                  contactValid:false,
                  passwordValid:false
            },
            isRedirect:false
          }
      }

  handleName = (e) => {
      this.setState({
        ...this.state,
           user:{
             ...this.state.user,
             name:e.target.value 
           },
          validation:{
               ...this.state.validation
             }
        }) 
        console.log(this.state.user.name);

      console.log(this.state.user.name)
      console.log(this.state.validation.nameValid)
    if(patterns.name.test(e.target.value)){
      document.getElementById("nameerror").style.display="none";
      this.setState({
        ...this.state,
           user:{
             ...this.state.user,  
             name:e.target.value 
           },
          validation:{
               ...this.state.validation,
               nameValid:true
             }
        }) 
    } else{
      this.setState({
        ...this.state,
           user:{
             ...this.state.user,  
             name:e.target.value 
           },
          validation:{
               ...this.state.validation,
               nameValid:false
             }
        }) 
      console.log("plz enter correct name")
      document.getElementById("nameerror").style.display="block";
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
  document.getElementById("emailerror").style.display="block";
}
}
handleContact = (e) => {
   console.log(e.target.value);
   this.setState({
    ...this.state,
       user:{
         ...this.state.user,  
         contact:e.target.value 
       },
      validation:{
           ...this.state.validation
         }
    })
if(patterns.contact.test(e.target.value)){
  document.getElementById("contacterror").style.display="none";
  this.setState({
    ...this.state,
       user:{
         ...this.state.user,  
         contact:e.target.value 
       },
      validation:{
           ...this.state.validation,
           contactValid:true
         }
    })
} else{
  console.log("plz enter correct contact");
  this.setState({
    ...this.state,
       user:{
         ...this.state.user,  
         contact:e.target.value 
       },
      validation:{
           ...this.state.validation,
           contactValid:false
         }
    })
  document.getElementById("contacterror").style.display="block";
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
      console.log(this.state.user);
        e.preventDefault();
        if(this.state.validation.nameValid && this.state.validation.emailValid && this.state.validation.contactValid && this.state.validation.passwordValid){
        fetch("http://localhost:3002/addstudent",
        {
            method : "Post", 
            headers : { 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(this.state.user)
        }).then((result) => {result.json().then((res)=>{
          alert("A new student created Successfully")
          // this.props.history.push('/home')
          // console.log(this.props.history.push('../home'));
          // {return <Redirect push to="/home" />} 
          this.setState({
            ...this.state,
               user:{
                 ...this.state.user,  
               },
              validation:{
                   ...this.state.validation,
                 },
            isRedirect:true
            })
        }) 
    })
    console.log(this.state.user);
    
  }else{
      alert("Please Enter All required entry");
    }
  }
   
    render() {
        return (
    <div>
      {this.state.isRedirect ? (
        <React.Fragment>
        {alert("Redireting..")}
        <Redirect push to="/home" />  
         </React.Fragment>)
       : ''}
    <Form  onSubmit = {this.handleSubmit}>
    <h1>Student</h1>
    {/* <container> */}
      <Row form >
      <Col lg="4"></Col>
        <Col lg="4">
        <FormGroup>
            {/* <Label for="restaurantName">Name</Label> */}
            <Input type="text" name="name" onChange={this.handleName} id="name" required="true" value={this.state.user.name} placeholder="Name" />
            <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span>
        </FormGroup>
          </Col>
    </Row>
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
        {/* <Label for="restaurantContact">Contact</Label> */}
        <Input type="text" name="contact" min="1" max="5" onChange={this.handleContact} id="restcontact" required="true" value={this.state.user.contact} placeholder="Contact"/>
        <span id="contacterror" style={{color:"red", display:"none"}}>Enter correct contact</span>
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

//....................
const Studentloginsignup = (props) => {
  const [activeTab, setActiveTab] = React.useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>

        <Row>
            <Col lg="4">
              </Col>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                  >
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                  >
                signup
                </NavLink>
                </NavItem>
               </Nav>
               <Col lg="4">
              </Col>
            
        </Row>
       <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <Studentlogin />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
                <Createstudent />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}


export default Studentloginsignup;