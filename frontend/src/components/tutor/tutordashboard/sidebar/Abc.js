import React from 'react';
import {
    container,
    Table,
    Card,
    Row,
    Col,
    Button, Form, FormGroup, Label, Input, FormText
  } from 'reactstrap';
 const Link2 = (props) => {
    return (
        <Row form inline>
        {/* <Col lg="4"></Col>
          <Col lg="4"> */}
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              {/* <Input type="text" name="name"  id="name" required={true} value="" laceholder="Name" />
              <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
                <Input type="select" bsSize="md">
                <option>SElect category</option>
                <option>Php</option>
                <option>Javascript</option>
                <option>Graphic design</option>
                <option>Android</option>
                <option>Ios</option>
                </Input>
          </FormGroup>
      
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              <Input type="text" name="name"  id="name" required={true}  laceholder="Name" />
              {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
          </FormGroup>
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              <Input type="text" name="name"  id="name" required={true} laceholder="Name" />
              {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
          </FormGroup>
          
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              <Input type="text" name="name"  id="name" required={true}  laceholder="Name" />
              {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
          </FormGroup>
          <FormGroup>
          <Button color="primary"> Submit</Button>
           </FormGroup>
            {/* </Col> */}

      </Row>
    );
  }
  
  export default Link2