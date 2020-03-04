import React from 'react';
import './App.css';
import {
  container,
  Table,
  Card,
  Row,
  Col
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from 'react-router-dom';

import NavigationLink from "./components/header/NavLink"
import { Redirect } from 'react-router';
import TopHeader from "./components/header/TopHeader"
import Footer from "./components/footer/Footer"
import Createtutor from "./components/tutor/Create-tutor.component";
import Studentloginsignup from "./components/student/Create-student.component";
import Tutorloginsignup from "./components/tutor/Create-tutor.component";
import Tutordash from "./route/Tutordash";
import Studentdash from "./route/Studentdash";
import Info from "./components/Info";
import Courses from "./components/Courses";
import Home from "./components/Home";

function App() {
  return (
    <div className="App container-fluid" style={{}}>
      <Router>
        <switch>
          
      <Route exact path="/">
      <Row className="mt-3 top" className="topheader" >
           <TopHeader />
      </Row>
            <NavigationLink />
            <Home />
      </Route>
      {(localStorage.getItem('login_auth_token')!==null) ?
      <Route path="/tutdashboard">
      <Tutordash/>
      </Route>  :''}
      
      <Route path="/home">
        <Row className="mt-3 top" className="topheader" >
        <TopHeader />
        </Row>
        <NavigationLink />
        <Home />
      </Route>
      <Route path="/student">
        <Studentloginsignup />
      </Route>
      <Route exact strict path="/tutor">
        <Row className="mt-3 top" className="topheader" >
        <TopHeader />
        </Row>
        <NavigationLink />
        <Tutorloginsignup />
      </Route>
      <Route path="/info">
          <Row className="mt-3 top" className="topheader" >
          <TopHeader />
          </Row>
          <NavigationLink />
          <Info />
      </Route>
      <Route path="/courses">
            <Row className="mt-3 top" className="topheader" >
            <TopHeader />
            </Row>
            <NavigationLink />
      <Row>
      <Courses/>
      </Row>
      </Route>
      {/* <Route exact path="/Tutordash">
<Tutordash />
      </Route> */}
       
    {/* {
    (localStorage.getItem('login_auth_token')!==null) ?
    // <Route exact strict path="/tutdashboard" component={Tutordash}>
    <Route strict path="/tutdashboard">
        <Tutordash/>
    </Route>: 
        <Redirect push to="/home" />  
    } */}
      <Row className="footer pt-5 mt-5">
        <Footer />
      </Row>
      </switch>
      </Router> 
    </div>
  ); 
} 

export default App;
