import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-scroll';
import {Fade} from 'react-awesome-reveal';
// import { useScrollLock } from '@mantine/hooks';
// import { HiMenuAlt2, HiX } from "react-icons/hi";

const Hero = () => {
    // let [lateralMenu, setLateralMenu] = useScrollLock(false);
    
    return (
        <section id="hero">
            <Container fluid style={{ height: '100vh' }} className="desktop">
                <Row style={{ height: '100vh' }}>
                    <Col lg={6} className="col-content">
                        <Fade bottom duration={500} delay={600} distance="30px" triggerOnce>
                            <div className="header">
                                <div className="header-content">
                                    <div></div>
                                    <div style={{ display: 'flex' }}>
                                        <div className="navbar-item"><Link to="about" smooth duration={500}>About</Link></div>
                                        <div className="navbar-item"><Link to="events" smooth duration={500}>Past Events</Link></div>
                                        <div className="navbar-item" style={{ marginRight: 0 }}><Link to="calendar" smooth duration={500}>Events Calendar</Link></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {Content()}
                    </Col>

                    <Col lg={6} className="p-0">
                        {/* <Fade></Fade> ..*/}
                            <img src={require("../Images/hero.jpg")} alt="Hero" />
                    </Col>

                </Row>
            </Container>

            <div className="mobile">
                <Fade bottom duration={500} delay={600} distance="30px" triggerOnce>
                    <img src={require("../Images/hero1.png")} alt="Hero" />
                    <div className="header">
                        <div className="header-content">
                            <div></div>
                            <div>
                                {/* {!lateralMenu 
                                ? <HiMenuAlt2 style={{ fontSize: 24 }} onClick={() => setLateralMenu(true)} /> 
                                : <HiX style={{ fontSize: 24, color: lateralMenu ? "#383535" : "#eeeded"  }} onClick={() => setLateralMenu(false)} /> } */}
                            </div>
                        </div>
                    </div>
                    <Container fluid style={{ height: '100vh' }} className="content">
                        <div className="margin-adder">
                            {Content()}
                        </div>
                    </Container>

                </Fade>

                    {/* <div style={{ display: lateralMenu ? 'block' : 'none' }} className="sidebar">
                        <Fade right duration={400} distance="30px">
                            <div className="sidebar-backdrop" />
                            <div className="sidebar-content">
                                <div className="menu-container">
                                    <div className="menu-title">Menu</div>
                                    <div className="menu-item"><Link to="about" smooth duration={500} onClick={() => setLateralMenu(false)}>About</Link></div>
                                    <div className="menu-item"><Link to="events" smooth duration={500} onClick={() => setLateralMenu(false)}>Past Events</Link></div>
                                    <div className="menu-item"><Link to="calendar" smooth duration={500} onClick={() => setLateralMenu(false)}>Events Calendar</Link></div>
                                </div>
                                <div className="menu-container" style={{ marginTop: 30 }}>
                                </div>
                            </div>
                        </Fade>
                    </div> */}
            </div>

        </section>
    );
};

const Content = () => {
    return (
        <div>
            <Fade direction="left" duration={500} delay={600} distance="30px" triggerOnce >
                <div className="mb-4">
                    <h1 className="primary-color">ISF</h1>
                    <h2>International Student Friendship</h2>
                    <p style={{ maxWidth: 550 }}>The Cal Poly International Student Friendship Club wants to build lasting friendships among international students, scholars and Christian American friends.</p>
                </div>

                <p style={{ maxWidth: 550 }}><i><strong>To join our events, 
                look for the sign-up form for all the upcoming events 
                at the bottom of this page in the Google calendar!</strong></i>
                <br /><br />
                If this is your first time hearing about us and would like to join our email list,
                fill out your info from the link down below!</p>

                {/* <Link to="about" smooth duration={500}>
                    <span className="button button-hero" data-cursor-text="Click me">
                        Tell me more
                    </span>
                </Link> */}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0hn7QdQ20TS9J_87EUOPMPR6KtsE6pJpnIylOokfuj60MIA/viewform?usp=sf_link"><span className="button button-hero">Fill out the interest form</span></a>
            </Fade>
        </div>
    );
}

export default Hero;
