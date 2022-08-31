import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Details = () => {
    return (
        <section id="details">
            <Container>
                <Fade left duration={500} delay={600} distance="30px">
                    <div className="mb-5 text-center"><h2>Explore this event</h2></div>
                </Fade>

                <Fade left duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/details/details1.jpg")} alt="Details1" data-cursor-text="Check out"  />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h3 style={{ fontWeight: 'normal' }}>Event1.</h3>
                                <p>I would love to tell more about it, but you'll have to press the button down here.</p>
                                <a href="https://main.de8en6hw10wec.amplifyapp.com"><span className="button button-hero">Find out</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>

                <Fade right duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={4} className="col-description">
                            <div>
                                <h3 style={{ fontWeight: 'normal' }}>Event2.</h3>
                                <p>There's a ... maybe you should check out!</p>
                                <a href="https://main.de8en6hw10wec.amplifyapp.com"><span className="button button-hero">Discover this one</span></a>
                            </div>
                        </Col>

                        <Col lg={8} className="p-4">
                            <img src={require("../Images/details/details2.jpg")} alt="Details2" data-cursor-text="Check out" />
                        </Col>
                    </Row>
                </Fade>

                <Fade left duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/details/details3.jpg")} alt="Details3" data-cursor-text="Check out"  />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h3 style={{ fontWeight: 'normal' }}>Event3</h3>
                                <p>what do you think?</p>
                                <a href="https://main.de8en6hw10wec.amplifyapp.com"><span className="button button-hero">Tell me about</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>

            </Container>
        </section>
    );
};

export default Details;