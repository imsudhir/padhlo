import React from 'react';
import {container, Table, Card, Row, Col, NavbarBrand} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faHome,faList,faPlus,faEdit,faSearch} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
   <React.Fragment>
          <Col>
          <p>link1</p>
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
