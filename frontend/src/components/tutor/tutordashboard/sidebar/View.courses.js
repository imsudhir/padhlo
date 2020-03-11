import React from 'react';
import { bool, func, string } from 'prop-types';
// import { Row } from 'simple-flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faBell, faSpinner,faBookReader } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, css } from 'aphrodite';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {
      Collapse,
      Navbar,
      NavbarToggler, 
      NavbarBrand,
      CardImg,
      Nav, 
      Row,
      NavItem,
      NavLink,
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu, 
      DropdownItem,
      UncontrolledTooltip
    } from 'reactstrap';
  
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

const Viewcourse = (props) =>{
    const { active, icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
             <Nav><NavItem id="viwcourselist"><NavLink to="/tutdashboard/list" disabled tag={Link}> <FontAwesomeIcon icon={faBookReader} /> <span>List all courses</span></NavLink></NavItem></Nav>
             <UncontrolledTooltip placement="right" target="viwcourselist">
              This is disabled for now
            </UncontrolledTooltip>
        </Row>)
}

 
Viewcourse.propTypes = {
    active: bool,
    icon: func,
    title: string 
};
export default Viewcourse;
