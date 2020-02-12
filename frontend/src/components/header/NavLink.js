import React, { Component } from 'react'; 
import LoginModal from "react-login-modal-sm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    Row,
    Col,
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
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faHome,faList,faPlus,faEdit,faSearch, faSign} from '@fortawesome/free-solid-svg-icons'
  import Createtutor from "../tutor/Create-tutor.component";
  import Createstudent from "../student/Create-student.component";

  if (document.querySelector('.sticky')){
    var sticky = document.querySelector('.sticky');

    if (sticky.style.position !== 'sticky') {
    var stickyTop = sticky.offsetTop;
  
    document.addEventListener('scroll', function () {
      window.scrollY >= stickyTop ?
        sticky.classList.add('fixed') :
        sticky.classList.remove('fixed');
    });
  }
}
  





  const style1 = {
    backgroundColor:'#85b3e2'
  };
  const navitemlist = [
    {id: '1', to:'home', text:' HOME', icon:faHome},
    {id: '2', to:'info', text:' INFO', icon: faList},
    {id: '3', to:'courses', text:' COURSES', icon: faPlus}
    // {to:'Createstudent', text:' Createstudent', icon: faSign}
  ];
  const Creatitemenunav = (props) =>{
  const navitems = props.navitems;
  console.log(navitems);
  const Createnavitem = navitems.map((item) => 
  <NavItem key={item.id}>
  
  <NavLink  style={{}} tag={Link} to={item.to}> <FontAwesomeIcon icon = {item.icon} />{item.text}</NavLink>
  </NavItem>
   ); 
   return( 
     <React.Fragment>
     {Createnavitem}
     </React.Fragment>
     ) 
  }
  class NavigationLink extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };  
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      }); 
    }
    render() {
      return <React.Fragment >
        <Navbar className="main_navbar"  className="sticky sticky-top"color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <DropdownItem divider />
              <Creatitemenunav navitems={navitemlist} />
            </Nav>
            {/* <NavLink style={{background:"rgb(0, 174, 239)"}} tag={Link} to="/login" tag={Link} className="mr-auto"> <FontAwesomeIcon icon = {faSign}/>
             LOGIN
            </NavLink>  */}
          </Collapse>
          <ul>
          <NavLink key="002" to="/student" style={{display:"block"}} tag={Link} className="mr-auto"> <FontAwesomeIcon icon = {faSign}/>
             LOGIN
          </NavLink> 
          </ul>
          <ul>
          <NavLink key="002" to="/Tutordash" style={{display:"block"}} tag={Link} className="mr-auto"> <FontAwesomeIcon icon = {faSign}/>
          Tutordash
          </NavLink> 
          </ul>
          
         </Navbar>
      </React.Fragment> 
    }
  }
  export default NavigationLink
  