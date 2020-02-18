import React from 'react';
// import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../components/tutor/tutordashboard/sidebar/SidebarComponent';
import TutorDashHeaderComponent from '../components/tutor/tutordashboard/header/TutordashHeaderComponent';
import ContentComponent from '../components/tutor/tutordashboard/content/ContentComponent';
import '../App.css';
import {Col, Row } from 'reactstrap'
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

class Tutordash extends React.Component {

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
            <Col flexGrow={1} className={css(styles.mainBlock)}>
                <TutorDashHeaderComponent title={selectedItem} />
                <div className={css(styles.content)}>
                {/* <ContentComponent /> */}
                 
                {/* <Router> */}
                <Route path="/tutdashboard/upload" component={ContentComponent} />
                <Route path="/tutdashboard/link1" component={ContentComponent} />
                <Route path="/tutdashboard/link2" component={ContentComponent} />
                {/* </Router> */}

                </div>
            </Col>
        </Row>
    );
}
}

export default Tutordash;
