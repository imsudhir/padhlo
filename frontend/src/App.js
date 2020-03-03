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
import Home from "./components/Home";

function App() {
  return (
    <div className="App container-fluid" style={{}}>
      <Router>
    {(localStorage.getItem('login_auth_token')==null) ?
      <React.Fragment>
        <Row className="mt-3 top" className="topheader" >
      <TopHeader />
      </Row>
      <NavigationLink />
      </React.Fragment>
      :'' }
      <Route path="/home">
      <Home />
      </Route>
      <Route path="/student">
        <Studentloginsignup />
      </Route>
      <Route path="/tutor">
        <Tutorloginsignup />
      </Route>
      <Route path="/info">
      <Info />
      </Route>
      {/* <Route exat path="/Tutordash">
<Tutordash />
      </Route> */}
       {/* {console.log(localStorage.getItem('login_auth_token'))} */}
      
    {
    (localStorage.getItem('login_auth_token')!==null) ?
    // <Route exact strict path="/tutdashboard" component={Tutordash}>
    <Route exact strict path="/tutdashboard" 
    render={
      ()=>{
      return(
        <Tutordash/>
      )
      }
    }
    >
    </Route>: 
        <Redirect push to="/home" />  
    }
      <Row className="footer pt-5 mt-5">
        <Footer />
      </Row>
      </Router> 
    </div>
  ); 
} 

export default App;
