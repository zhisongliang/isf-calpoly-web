import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Details = () => {
    return (
        <section id="details">
            <Container>
                <Fade left duration={500} delay={600} distance="30px">
                    <div className="mb-5 text-center"><h2>Some of Our Past Events</h2></div>
                </Fade>

                <Fade left duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/details/details1.jpg")} alt="Details3" data-cursor-text="Check out"  />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h3 style={{ fontWeight: 'normal' }}>Celebration of Lunar New Year 2022.</h3>
                                <p> A big shoutout to all performers, facilitators, organizers and ISI team who hosted and cooked delicious food for all of the us.</p>
                                <a href="https://www.instagram.com/isf_calpoly/"><span className="button button-hero">Find out more</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>
                
                <div className="pc">
                    <Fade right duration={500} delay={600} distance="30px">
                        <Row className="mb-5 mb-lg-0">
                            <Col lg={4} className="col-description">
                                <div>
                                    <h3 style={{ fontWeight: 'normal' }}>Multi-Cultural Potluck Dinner.</h3>
                                    <p>There was a variety of food and dessert from different countries.</p>
                                    <a href="https://www.facebook.com/groups/calpoly.isf"><span className="button button-hero">Discover more</span></a>
                                </div>
                            </Col>

                            <Col lg={8} className="p-4">
                                <img src={require("../Images/details/details2.jpg")} alt="Details2" data-cursor-text="Check out" />
                            </Col>
                        </Row>
                    </Fade>
                </div>

                {/* mobile */}
                <div className="mobile">
                    <Fade right duration={500} delay={600} distance="30px">
                        <Row className="mb-5 mb-lg-0">
                            <Col lg={8} className="p-4">
                                    <img src={require("../Images/details/details2.jpg")} alt="Details2" data-cursor-text="Check out" />
                            </Col>
                            
                            <Col lg={4} className="col-description">
                                    <div>
                                        <h3 style={{ fontWeight: 'normal' }}>Multi-Cultural Potluck Dinner.</h3>
                                        <p>There was a variety of food and dessert from different countries.</p>
                                        <a href="https://www.facebook.com/groups/calpoly.isf"><span className="button button-hero">Discover more</span></a>
                                    </div>
                            </Col>
                        </Row>
                    </Fade>
                </div>

                <Fade left duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/details/details3.jpg")} alt="Details1" data-cursor-text="Check out"  />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h3 style={{ fontWeight: 'normal' }}>Morro Bay Kayaking.</h3>
                                <p>Great fun at Kayaking. </p>
                                <a href="https://www.facebook.com/groups/calpoly.isf/posts/4338759916242974/"><span className="button button-hero">Join our Facebook group</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </section>
    );
};

export default Details;