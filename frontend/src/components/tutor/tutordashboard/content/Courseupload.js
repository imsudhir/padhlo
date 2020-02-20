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
    name:/^[a-z\d ]{4,20}$/i,
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    contact:/^(\+\d{2,4})?\s?(\d{10})$/,
    password:/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z@0-9]+){5,20}$/,
  }

class Courseupload extends Component {
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

handleSubmit = (e) => {
    console.log(this.state.user);
      e.preventDefault();
      if(this.state.validation.nameValid && this.state.validation.emailValid && this.state.validation.contactValid && this.state.validation.passwordValid){
      fetch("http://localhost:3002/signup/student",
      {
          method : "Post", 
          headers : {
              'Content-Type':'application/json'
          },
          body : JSON.stringify(this.state.user)
      }).then((result) => {result.json().then((res)=>{
        console.log(res.recurring_email);
        if(!res.recurring_email){
        alert("A new student created Successfully")
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
        } else{
        document.getElementById("emailerrorr").style.display="block";
        document.getElementById("emailerrorr").innerHTML = "This email allready exist..";
        }
      }) 
  })
  console.log(this.state.user);
  
}else{
    alert("Please Enter All required entry");
  }
}
 render() {
      return (
          <React.Fragment>
  <Form  onSubmit = {this.handleSubmit}>
  <h1>Upload Files</h1>
  <container >
    <FormGroup>
            <Input type="select">
              <option>Select category</option>
                <optgroup label="php">Php</optgroup>
                  <option>&nbsp; &nbsp;&nbsp;&nbsp;core php</option>
                  <option>&nbsp; &nbsp;&nbsp;&nbsp;advance php</option>
                <optgroup label="php framework"></optgroup>
                  <option>&nbsp; &nbsp;&nbsp;&nbsp;CodeIgniter</option>
                  <option>&nbsp; &nbsp;&nbsp;&nbsp;Laravel</option>
                <optgroup label="Graphic design">Php</optgroup>
                  <option>&nbsp; &nbsp;&nbsp;&nbsp;Adobe</option>
                  <option>&nbsp; &nbsp;&nbsp;&nbsp;Illusterater</option>
            </Input>
          </FormGroup>
        <FormGroup>  
          <Input type="select" bsSize="md">
              <option>Select Course</option>
              <optgroup label="php">Php</optgroup>
                <option>&nbsp; &nbsp;&nbsp;&nbsp;core php</option>
                <option>&nbsp; &nbsp;&nbsp;&nbsp;advance php</option>
              <optgroup label="php framework"></optgroup>
                <option>&nbsp; &nbsp;&nbsp;&nbsp;CodeIgniter</option>
                <option>&nbsp; &nbsp;&nbsp;&nbsp;Laravel</option>
              <optgroup label="Graphic design">Php</optgroup>
                <option>&nbsp; &nbsp;&nbsp;&nbsp;Adobe</option>
                <option>&nbsp; &nbsp;&nbsp;&nbsp;Illusterater</option>
          </Input>
        </FormGroup>
      <FormGroup>
          <Input type="text" name="tutorial_title" onChange={this.handleTitle} id="name" required={true} value={this.state.user.name} placeholder="Title" />
          <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span>
      </FormGroup>
      <FormGroup>
           <Input type="file" name="name" onChange={this.handleName} id="name" required={true} value={this.state.user.name} placeholder="Name" />
          <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span>
      </FormGroup>
   <Button color="primary" size="md" block>Upload</Button>
  </container>
  </Form>
  </React.Fragment>
      );
  } 
}

// class Courseupload1 extends Component {

//     render(){
//     return (
//         <Row form inline>
//         {/* <Col lg="4"></Col>
//           <Col lg="4"> */}
//           <FormGroup>
//               {/* <Label for="restaurantName">Name</Label> */}
//               {/* <Input type="text" name="name"  id="name" required={true} value="" laceholder="Name" />
//               <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
//                 <Input type="select" bsSize="md">
//                 <option>SElect category</option>
//                 <optgroup label="php">Php</optgroup>
//                 <option>&nbsp; &nbsp;&nbsp;&nbsp;core php</option>
//                 <option>&nbsp; &nbsp;&nbsp;&nbsp;advance php</option>
//                 <optgroup label="php framework"></optgroup>

//                 <option>&nbsp; &nbsp;&nbsp;&nbsp;CodeIgniter</option>
//                 <option>&nbsp; &nbsp;&nbsp;&nbsp;Laravel</option>
//                 <optgroup label="Graphic design">Php</optgroup>
                
//                 <option>&nbsp; &nbsp;&nbsp;&nbsp;Adobe</option>
//                 <option>&nbsp; &nbsp;&nbsp;&nbsp;Illusterater</option>
//             </Input>
//           </FormGroup>
      
//           <FormGroup>
//               {/* <Label for="restaurantName">Name</Label> */}
//               <Input type="text" name="name"  id="name" required={true}  laceholder="Name" />
//               {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
//           </FormGroup>
//           <FormGroup>
//               {/* <Label for="restaurantName">Name</Label> */}
//               <Input type="text" name="name"  id="name" required={true} laceholder="Name" />
//               {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
//           </FormGroup>
          
//           <FormGroup>
//               {/* <Label for="restaurantName">Name</Label> */}
//               <Input type="text" name="name"  id="name" required={true}  laceholder="Name" />
//               {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
//           </FormGroup>
//           <FormGroup>
//           <Button color="primary"> Submit</Button>
//            </FormGroup>
//             {/* </Col> */}

//       </Row>
//     )
//   }
// }
   


// function ContentComponent() {
//     return (
  
//             <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" break points={{ 768: 'column' }}>
//                <Col> 
//                {/* <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
//                     <Example className={css(styles.miniCardContainer)} title="Unresolved" value="60" />
//                 </Row> */}
//                     {/* <Example /> */}

//                 </Col>
//             </Row>
//     )
               
// }

export default Courseupload;
