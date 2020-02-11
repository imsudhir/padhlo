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
  Route,
  Link
} from 'react-router-dom';
import NavigationLink from "./components/header/NavLink"
import TopHeader from "./components/header/TopHeader"
import Footer from "./components/footer/Footer"
import Createtutor from "./components/tutor/Create-tutor.component";
import Createstudent from "./components/student/Create-student.component";
import Info from "./components/Info";
import Home from "./components/Home";

function App() {
  return (
    <div className="App container-fluid" style={{}}>
      <Router>
      <Row className="mt-3 top" className="topheader" >
        <TopHeader />
      </Row>
      <NavigationLink />
      <Route path="/home">
      <Home />
      </Route>
      <Route path="/student">
        <Createstudent />
      </Route>
      <Route path="/info">
      <Info />
      </Route>
      <Row className="footer pt-5 mt-5">
        <Footer />
      </Row>
      </Router>
    </div>
  ); 
} 

export default App;
