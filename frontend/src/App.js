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
import Studentloginsignup from "./components/student/Create-student.component";
import Tutordash from "./route/Tutordash";
import Studentdash from "./route/Studentdash";
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
        <Studentloginsignup />
      </Route>
      <Route path="/info">
      <Info />
      </Route>
      {/* <Route exat path="/Tutordash">
<Tutordash />
      </Route> */}
      <Route exat path="/Studentdash">
      <Tutordash />
      </Route>
      <Row className="footer pt-5 mt-5">
        <Footer />
      </Row>
      </Router> 
    </div>
  ); 
} 

export default App;
