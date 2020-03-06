import React, { Component } from 'react';
import { UncontrolledCarousel, Col, Jumbotron ,Button, Media } from 'reactstrap';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles11.css';
const items = [
  {
    src: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://fordhaminstitute.org/sites/default/files/styles/single_main_image/public/2019-01/peer-tutoring-and-gifted-learners-applying-critical-thinking-lens-catherine-little.jpg?itok=J22KR3s7',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src:'https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Jambo = (props) => {
  return (
    <div>
      <Jumbotron className="mt-5">
        <h1 className="display-3">Get personal learning recommendations </h1>
        <p className="lead">Answer a few questions for your top picks</p>
        <hr className="my-2" />
         <p className="lead">
          <Button color="primary">Learn now</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
//..........................

const content = [
	{
		title: 'Education Is The Best Way To Reform people',
		description:
		'We teach, model, and encourage a love of learning, collaboration, and compassion.',
		// button: 'Read More',
		image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: "Education Shapes's peoples Life",
		description:
		'Learn for life..',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Learn to do their best work with other, and be safe  fair and kind',
		button: 'Learn Now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const Home = () => (
 
	 <React.Fragment>
		{/* <div className="wrapper">
			<h1>react-animated-slider</h1>
		
		</div> */}
		<Slider className="slider-wrapper containerFluid">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
 </React.Fragment>
);

//...........................

const Home11 = () => {
return (
  <React.Fragment>
<UncontrolledCarousel items={items} />
  <Jambo />

  </React.Fragment>


); 
}
class Home1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <h1>Home1 Page</h1>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance. 
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."  
                </p>
                <p>
                <Col>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLS1QulWo1RIZc4GM_E04HCPEd_xpcaQgg" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>   
                <Col>   
               <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLS1QulWo1RIZc4GM_E04HCPEd_xpcaQgg" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </Col>
               <Col>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLS1QulWo1RIZc4GM_E04HCPEd_xpcaQgg" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </Col>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance. 
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."
                </p>
            </React.Fragment>

         );
    }
}

export default Home ;