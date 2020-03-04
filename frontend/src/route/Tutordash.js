import React from 'react';
import {Component}from 'react';
import axios from 'axios';
import logo from '../logo.svg';
 
// import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../components/tutor/tutordashboard/sidebar/SidebarComponent';
import TutorDashHeaderComponent from '../components/tutor/tutordashboard/header/TutordashHeaderComponent';
import ContentComponent from '../components/tutor/tutordashboard/content/Courseupload';
import Courseupload from '../components/tutor/tutordashboard/content/Courseupload';
import Createnewcourse from '../components/tutor/tutordashboard/content/Createnewcourse'
import Embedyoutubeplaylist from '../components/tutor/tutordashboard/content/Embedyoutubeplaylist'
import '../App.css';
// import {Col, Row } from 'reactstrap'
import {
    Col, Row ,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { Redirect, Switch } from "react-router";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});


class ContentComponent1 extends Component {
    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }
   
    onChangeHandleri=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0
        })
        // console.log(this.state)
        console.log(event.target.files[0])
    const imagess = '1582430158218-Annotation 2020-01-26 104802.png';

      }
    //   onClickHandler = () => {
    //     const data = new FormData() 
    //     data.append('file', this.state.selectedFile)
    // }
     onClickHandler = () => {

        const data = new FormData()
        data.append('file', this.state.selectedFile)
       console.log(data)

        axios.post("http://localhost:3002/upload", data, { 
           // receive two    parameter endpoint url ,form data
       })
       .then(res => { // then print response status
        console.log(res.statusText)
     })
    }
render() {
    console.log(this.state)
    return(
        <div>
            <h1>Tutorial list</h1>
        </div>
    )
}}
class Tutordash extends Component {

    state = { selectedItem: 'Tickets' };
    constructor(){
        super(); 
        this.state = {
            selectedItem: 'Tickets'
        }

    }
    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

resize = () => this.forceUpdate();

render() {
    const { selectedItem } = this.state;
    console.log(this.state)
    return (
        <Row className={css(styles.container)}>
            <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
            <Col flexGrow={2} className={css(styles.mainBlock)}>
                <TutorDashHeaderComponent title={selectedItem} />
                <div className={css(styles.content)}>
                {/* <ContentComponent /> */}
                 
                {/* <Router> */}
                <Route path="/tutdashboard/upload" component={Courseupload} />
                <Route path="/tutdashboard/new" component={Createnewcourse} />
                <Route path="/tutdashboard/list" component={ContentComponent1} />
                <Route path="/tutdashboard/embed" component={Embedyoutubeplaylist}/>
                <Route path="/tutdashboard/link2" component={ContentComponent} />
                {/* </Router> */}

                </div>
            </Col>
        </Row>
    );
}
}

export default Tutordash;
