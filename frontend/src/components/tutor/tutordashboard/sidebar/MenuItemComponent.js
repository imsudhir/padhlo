import React from 'react';
import { bool, func, string } from 'prop-types';
// import { Row } from 'simple-flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faBell } from '@fortawesome/free-solid-svg-icons'
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
      DropdownItem
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

// function MenuItemComponent(props) {
//     const { active, icon, title, ...otherProps } = props;
//     const Icon = icon;
//     return (
//         <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
//             {active && <div className={css(styles.activeBar)}></div>}
//             <Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} />
//             <span className={css(styles.title, active && styles.activeTitle)}>{title}</span>
//         </Row>
        
     
//     );
// }

const MenuItemComponent = (props) =>{
    const { active, icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
            {/* <Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} /> */}
            <Nav><NavItem><NavLink to="/tutdashboard/upload" tag={Link}><FontAwesomeIcon icon={faNewspaper} /> Upload Files</NavLink></NavItem></Nav>
             <Nav><NavItem><NavLink to="/tutdashboard/Link2" tag={Link}><FontAwesomeIcon icon={faNewspaper} />Link2</NavLink></NavItem></Nav>
             {/* <span className={css(styles.title, active && styles.activeTitle)}>Upload Files</span> */}
             {/* <NavItem> <NavLink href="#">Link</NavLink></NavItem> */}
        </Row>)
}
const MenuItemComponent1 = (props) =>{
    const { active, icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
            {/* <Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} /> */}
             <Nav><NavItem><NavLink to="/tutdashboard/upload" tag={Link}><FontAwesomeIcon icon={faNewspaper} /> Upload Files</NavLink></NavItem></Nav>
             {/* <span className={css(styles.title, active && styles.activeTitle)}>Upload Files</span> */}
             {/* <NavItem> <NavLink href="#">Link</NavLink></NavItem> */}
        </Row>)
}

MenuItemComponent.propTypes = {
    active: bool,
    icon: func,
    title: string
};
MenuItemComponent1.propTypes = {
    active: bool,
    icon: func,
    title: string
};
export default MenuItemComponent;
