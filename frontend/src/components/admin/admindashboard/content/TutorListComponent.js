import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import {
Table,
UncontrolledTooltip
} from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faDelet, faTrash, faVial, faVoicemail, faFilePdf, faFileDownload, faThumbsUp, faBan } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  cardsContainer: {
      marginRight: -30,
      marginTop: -30
  },
  cardRow: {
      marginTop: 30,
      '@media (max-width: 768px)': {
          marginTop: 0
      }
  },
  miniCardContainer: {
      // flexGrow: 1,
      marginRight: 30,
      '@media (max-width: 768px)': {
          marginTop: 30,
          maxWidth: 'none'
      }
  },
  todayTrends: {
      marginTop: 30
  },
  lastRow: {
      marginTop: 30
  },
  unresolvedTickets: {
      marginRight: 30,
      '@media (max-width: 1024px)': {
          marginRight: 0
      }
  },
  tasks: {
      marginTop: 0,
      '@media (max-width: 1024px)': {
          marginTop: 30,
      }
  },
  boxx :{
    "boxShadow": "-1px -1px 4px red"
  },
  tableresponsivenes:{
    "maxHeight":"370px",
    "overflowY":"scroll"
  },
  customnodrop:{
    pointerEvents: 'none',
    cursor:'not-allowed'
    }
  
});

class TutorsList extends Component {
    constructor(props) {
        super(props);
          this.state = {
            tutorlist: null,
            isloading:false
          }
       
      }
      
     
    handleListing = () => {

        axios.get("http://localhost:3002/user/tutor", { 
           // receive two    parameter endpoint url ,form data
       })
       .then(res => { // then print response status
        console.log(res,'oooooooooooo');
        this.setState({
          tutorlist:res.data.data,
         isloading:true
        })
      })
    }
componentDidMount(){
  this.handleListing();
  console.log("jiii");
}
handleUserVerification = (id) =>{
  fetch("http://localhost:3002/verifyuser/",
  {
      method : "PUT",
      headers : {
    'Content-Type':'application/json'
},
body : JSON.stringify({
  "id":id
})

})
  .then((result) => {result.json().then((res)=>{
  const Swal = require('sweetalert2')
  const MySwal = withReactContent(Swal)

  MySwal.fire({
    onOpen: () => {
      // `MySwal` is a subclass of `Swal`
      //   with all the same instance & static methods
      MySwal.clickConfirm()
    }
  }).then(() => {
    return (
      MySwal.fire(
        'Verified',
        'successfully',
        'success'
      )).then(()=>{
      this.handleListing();
      })

  })

  //     console.log(res.data);
  // alert("User Verified Successfully")

  })
})

}

render() {
    console.log(this.state.tutorlist, 'kkkkkk')
    return(
        // <div>
        <React.Fragment>

    <div style={{"boxShadow":"1px 1px 4px 4px black"}} >
    <h1>Tutorial list</h1>

      <div style={{maxHeight:"480px", overflowY:"scroll"}}>
    <Table responsive >

      <thead >
        <tr style={{position:"sticky"}}>
          <th>Sr.</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Verify status</th>
        </tr>
      </thead>
      <tbody>
        {this.state.isloading ?  (
         this.state.tutorlist.map( (list, index) => {
          return(
            <tr>
            <th scope="row">{index}</th>
            <td>{list.name}</td>
            <td>{list.contact}</td>
            <td>{list.email}</td>
            {list.verify_status ? 
            <td className={css(styles.customnodrop)}>
            <NavLink tag={Link}  to={"/admindashboard/list/"}  onClick={(e)=>{this.handleUserVerification(list.user_id)}}>
            <span  id={"abc"+list.user_id} className= {list.verify_status ? 'badge badge-success no-drop '+ css(styles.customnodrop):'badge badge-danger'}>
            {list.verify_status ? 'Verified':'Unverified'}
            </span>
            <UncontrolledTooltip placement="top" target={"abc"+list.user_id}>
            {list.verify_status ? 'Verified':'Verify Now'}
            </UncontrolledTooltip>
              </NavLink> 
              </td>:
              <td>
               <NavLink tag={Link} to={"/admindashboard/list/"}  onClick={(e)=>{this.handleUserVerification(list.user_id)}}>
               <span  id={"abc"+list.user_id} className= {list.verify_status ? 'badge badge-success'+ css(styles.customnodrop):'badge badge-danger'}>
               {list.verify_status ? 'Verified':'Unverified'}
               </span>
               <UncontrolledTooltip placement="top" target={"abc"+list.user_id}>
                 Verify Now
               </UncontrolledTooltip>
              </NavLink>
            </td> }
          </tr>
         )})):'Please wait'}
      </tbody>
    </Table>
    </div>
    </div>
    </React.Fragment>
     )
}}
export default TutorsList;