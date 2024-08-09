import { Container, Row, Col, ResponsiveEmbed } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const Events = () => {
    return (
        <section id="events">
            <Container>
                <Fade diretion="left" duration={500} delay={600} triggerOnce>
                    <div className="mb-5 text-center"><h2>Some of Our Past Events</h2></div>
                </Fade>

                <Fade diretion="left" duration={500} delay={600} triggerOnce>
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/details/details1.jpg")} alt="Details3" data-cursor-text="Check out"  />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h3 style={{ fontWeight: 'normal' }}>Celebration of Lunar New Year.</h3>
                                <p> A big shoutout to all performers, facilitators, organizers and ISI team who hosted and cooked delicious food for all of the us.</p>
                                <a href="https://www.instagram.com/isf_calpoly/"><span className="button button-hero">Find out more</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>
                
                <div className="pc">
                    <Fade diretion="right" duration={500} delay={600} triggerOnce>                        
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
                    <Fade diretion="right" duration={500} delay={600} triggerOnce>                        
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

                <Fade diretion="left" duration={500} delay={600} triggerOnce>
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/details/details3.jpg")} alt="Details1" data-cursor-text="Check out"  />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h3 style={{ fontWeight: 'normal' }}>Morro Bay Kayaking.</h3>
                                <p>Kayaking Morro Bay from Central Coast Outdoors ensures you will see the wonders of this extraordinary National Estuary. </p>
                                <a href="https://www.facebook.com/groups/calpoly.isf/posts/4338759916242974/"><span className="button button-hero">Join our Facebook group</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>

              

                
        <Row className="mb-5 mb-lg-0">
            <Col lg={8} className="p-4">
                {/* test adding YouTube video */}
                <div style="position:relative;height:0;overflow:hidden;max-width:100%;padding-bottom:56.25%;">
                    <iframe src="https://www.youtube.com/watch?v=c_U7xwErCas"  
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                    frameborder="0"
                    allowfullscreen></iframe>
                </div>
                {/* End of adding YouTube video */}
            </Col>

            <Col lg={4} className="col-description">
                <div>
                    <h3 style={{ fontWeight: 'normal' }}>ISF Recap 2023-2024 School Year.</h3>
                </div>
            </Col>
        </Row>
   
            </Container>
        </section>
    );
};

export default Events;
