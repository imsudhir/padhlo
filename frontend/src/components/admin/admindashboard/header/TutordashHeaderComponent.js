import React, { Component } from 'react';
import { string } from 'prop-types';
import { Redirect } from 'react-router';

// import { Row } from 'simple-flexbox';
import {
    Collapse,
    Navbar,
    Row,
    Col,
    Button, 
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, 
    DropdownItem
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faHome,faList,faPlus,faEdit,faSearch, faSign, faLiraSign, faDollarSign, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

import { StyleSheet, css } from 'aphrodite';
import IconSearch from '../../../../assets/icon-search';
import IconBellNew from '../../../../assets/icon-bell-new';

const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
});

class AdminDashHeaderComponent extends Component{
    constructor(){
        super()
        this.state={
            logout:false
        }
    }
    Logout = () =>{
        localStorage.clear();
        this.setState({
            logout:true
        })
    } 
    render(){ 
    return (
        <Row className="testttttttttttttttt">
        {this.state.logout ? (<Redirect push to="/home" />) :''}
            <Col lg="10" sm="10" md="10"></Col>
            <Col lg="2" sm="2" md="2">
            <Button  style={{padding:"2px"}} color="primary" key="002" to="/home" onClick={this.Logout} style={{display:"block"}} tag={Link} className="mr-auto"> <FontAwesomeIcon icon = {faSignOutAlt}/>
              Logout 
            
             </Button> 
          </Col>
        </Row>
    );
    }
}

AdminDashHeaderComponent.propTypes = {
    title: string
};

export default AdminDashHeaderComponent;
