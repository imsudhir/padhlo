import React, { Component } from 'react';
 import { NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu, 
  Collapse,
  DropdownItem, Table, Button, ButtonGroup, Card, CardBody, Row, Col} from 'reactstrap';
  import ScrollAnimation from 'react-animate-on-scroll';

class Courses extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: true,
            Course: [],
            error: null
          }
        }
        fetchYoutubeCourse() {
            fetch(`http://localhost:3002/getyoutubecourse`)
              .then(response => response.json())
              .then(data =>
                this.setState({
                  Course: data,
                  isLoading: false,
                })
              )
              .catch(error => this.setState({ error, isLoading: false }));
          }
      
          componentDidMount() {
            this.fetchYoutubeCourse();
          }
          
    render() {
          
      const { isLoading, Course, error } = this.state;
      return (
     <React.Fragment>

        {error ? <p>{error.message}</p> : null}
       {!isLoading ? (
         Course.map(courses => {
            const { course_id, demo_file} = courses;
           return (
            <Col className="mt-5">
              <ScrollAnimation animateIn="zoomIn">

          <Card className="jd_element_">
            <CardBody style={{boxShadow: "#8e8181 4px 3px 14px 0px"}}>
            <iframe
            src= {demo_file}
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            </CardBody>
            </Card>
            </ScrollAnimation>
             </Col>
           );
         })
       ) : (
         <h3>Loading...</h3>
       )}
      </React.Fragment>
   );
 }
}

 export default Courses 
  