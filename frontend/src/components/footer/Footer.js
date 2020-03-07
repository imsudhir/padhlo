import React from 'react';
import {container, Table, Card, Row, Col, NavbarBrand} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faHome,faList,faPlus,faSign,faEdit,faSearch, faSignInAlt, faBookReader} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

function Footer() {
  return (
   <React.Fragment>
        <Col>
        <ul>
        <NavLink style={{color:"white", textDecoration:"none"}} tag={Link} to="/tutor" tag={Link} className="btnPrimary">
           <FontAwesomeIcon icon = {faSignInAlt}/>
           &nbsp;LOGIN
        </NavLink>
      </ul>
        <ul>
        <NavLink style={{color:"white", textDecoration:"none"}} tag={Link} to="/courses" tag={Link} className="btnPrimary">
           <FontAwesomeIcon icon = {faBookReader}/>
           &nbsp;Courses
        </NavLink>
        </ul>
        <ul>
        <NavLink style={{color:"white", textDecoration:"none"}} tag={Link} to="/home" tag={Link} className="btnPrimary">
           <FontAwesomeIcon icon = {faHome}/>
           &nbsp;Home
        </NavLink>
        </ul>
        </Col>
          <Col>
          <FontAwesomeIcon icon = {faPlus} /> <b>Call Now
          </b>
          <p>91 7065370655</p>
          </Col>
          <Col>
          <b>Send Message</b>
          <p>info@padhlo.com</p>
          </Col>
          <Col>
            <b>Our Location</b>
            <p>Rz-123 Manas Kunj Road Uttam Nager, Delhi</p>
          </Col>
    </React.Fragment>
  ); 
} 

export default Footer;
