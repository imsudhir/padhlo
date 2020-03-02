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
    Button, Form, FormGroup, Label, Input, FormText, Spinner
  } from 'reactstrap'; 
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faBell,faSpinner,faUpload } from '@fortawesome/free-solid-svg-icons'
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


  const Embedyoutubeplaylistmenu = (props) =>{
    const { active, icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
             <Nav>
               <NavItem>
                 <NavLink to="/tutdashboard/embed" tag={Link}>
                   <FontAwesomeIcon icon={faUpload} /> <span>Embed Playlist</span>
                   </NavLink>
                 </NavItem>
              </Nav>
         </Row>)
      }

export default Embedyoutubeplaylistmenu