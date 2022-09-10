import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { MdLocalAirport } from 'react-icons/md';
import { IoFastFoodSharp } from 'react-icons/io5';
import { GiHiking } from 'react-icons/gi';
import { GiThreeFriends } from 'react-icons/gi';


const iconStyle = { fontSize: 36 };

const About = () => {
    return (
        <>
            <section id="about">
                <Fade left duration={500} delay={600} distance="30px">
                    <Container>
                        <div>
                        <p className="title">
                            <span className="white-color" style={{ fontWeight: 'bold' }}>ISF</span> - International Student Friendship
                        </p>
                        <p className="subtitle"><span className="black-color" style={{ fontWeight: 'bold' }}>
                        The Cal Poly International Student Friendship Club wants to build lasting friendships among international students, 
                        scholars and Christian American friends by caring for and fostering one another's unique interests – 
                        physical, social, emotional, and spiritual. We seek to help the Cal Poly, San Luis Obispo international 
                        student community reach their full potential as leaders.</span> 
                        </p>
                        <br></br>
                        <p className="subtitle"><span className="black-color" style={{ fontWeight: 'bold' }}>
                        IN OTHER WORDS, WE WANT TO BE YOUR FRIENDS!!!</span> 
                        </p>
                        <br /><br /><br /><br />
                        <p className="affliation"><small><span className="white-color">
                        Affiliated with International Students Inc.</span></small>
                        </p>
                        </div>
                    </Container>
                </Fade>
            </section>


           <section id="about-p2">
                <Fade left duration={500} delay={600} distance="30px">
                    <Container>
                        <div className="mb-5"><h2>What We Do</h2></div>
                        <Row>
                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><IoFastFoodSharp style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">Dinner Events</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>We have dinner events bi-weekly, come join us and meet new friends!</p></div>
                            </Col>

                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><MdLocalAirport style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">Airport Pick Up</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>If you need free airport/Amtrak/station pick up, contact us!</p></div>
                            </Col>

                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><GiHiking style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">Outdoor Activities</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>We hang out together, check out our future events and sign up!</p></div>
                            </Col>

                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><GiThreeFriends style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">Community for Oversea Students</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>We provide welcoming space for international students.</p></div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>
    </section>
        </>
    );
};

export default About;