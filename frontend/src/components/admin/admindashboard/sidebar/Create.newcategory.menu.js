import React from 'react';
import {
    container,
    Table,
    Card,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    UncontrolledTooltip,
    Button, Form, FormGroup, Label, Input, FormText, Spinner
  } from 'reactstrap'; 
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faBell,faSpinner,faUpload, faCreditCard, faCircleNotch, faCat, faChalkboardTeacher, faAd, faArrowAltCircleUp, faMapMarkerAlt, faFileAlt, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, css } from 'aphrodite';
  const styles = StyleSheet.create({
    activeBar: {
        height: 56,
        width: 3,
        backgroundColor: '#DDE2FF',
        position: 'absolute',
        left: 0
    },
    activeContainer: {
        backgroundColor: 'rgba(221,226,255, 0.08)'
    },
    activeTitle: {
        color: '#DDE2FF'
    },
    container: {
        height: 56,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(221,226,255, 0.08)'
        },
        paddingLeft: 32,
        paddingRight: 32
    },
    title: {
        fontFamily: 'Muli',
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#A4A6B3',
        marginLeft: 24
    }
});


  const Createnewcategorymenu = (props) =>{
    const { active, icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
             <Nav>
               <NavItem id="createnewcategory">
                 <NavLink to="/admindashboard/new" tag={Link}>
                   <FontAwesomeIcon icon={faArrowAltCircleRight} /> <span>New Category</span>
                   </NavLink>
                 </NavItem>
                 <UncontrolledTooltip placement="right" target="createnewcategory">
                 Create New Category
            </UncontrolledTooltip>
              </Nav>
         </Row>)
      }

export default Createnewcategorymenu