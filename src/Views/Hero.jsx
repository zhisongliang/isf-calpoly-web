import { useScrollLock } from '@mantine/hooks';
import { Container, Row, Col } from "react-bootstrap";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const Hero = () => {
    let [lateralMenu, setLateralMenu] = useScrollLock(false);

    return (
        <section id="hero">

            <Container fluid style={{ height: '100vh' }} className="desktop">
                <Row style={{ height: '100vh' }}>

                    <Col lg={6} className="col-content">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <div className="header">
                                <div className="header-content">
                                    <div></div>
                                    <div style={{ display: 'flex' }}>
                                        <div className="navbar-item"><Link to="about" smooth duration={500}>About</Link></div>
                                        <div className="navbar-item"><Link to="details" smooth duration={500}>Events</Link></div>
                                        <div className="navbar-item" style={{ marginRight: 0 }}><Link to="contact" smooth duration={500}>Contact</Link></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {Content()}
                    </Col>

                    <Col lg={6} className="p-0">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <img src={require("../Images/hero.jpg")} alt="Hero" />
                        </Fade>
                    </Col>

                </Row>
            </Container>

            <div className="mobile">
                <Fade bottom duration={500} delay={600} distance="30px">

                    <img src={require("../Images/hero.jpg")} alt="Hero" />
                    <div className="header">
                        <div className="header-content">
                            <div></div>
                            <div>
                                {!lateralMenu 
                                ? <HiMenuAlt2 style={{ fontSize: 24 }} onClick={() => setLateralMenu(true)} /> 
                                : <HiX style={{ fontSize: 24, color: lateralMenu ? "#383535" : "#eeeded"  }} onClick={() => setLateralMenu(false)} /> }
                            </div>
                        </div>
                    </div>
                    <Container fluid style={{ height: '100vh' }} className="content">
                        <div className="margin-adder">
                            {Content()}
                        </div>
                    </Container>

                </Fade>

                    <div style={{ display: lateralMenu ? 'block' : 'none' }} className="sidebar">
                        <Fade right duration={400} distance="30px">
                            <div className="sidebar-backdrop" />
                            <div className="sidebar-content">
                                <div className="menu-container">
                                    <div className="menu-title">Menu</div>
                                    <div className="menu-item"><Link to="about" smooth duration={500} onClick={() => setLateralMenu(false)}>About</Link></div>
                                    <div className="menu-item"><Link to="details" smooth duration={500} onClick={() => setLateralMenu(false)}>Events</Link></div>
                                    <div className="menu-item"><Link to="contact" smooth duration={500} onClick={() => setLateralMenu(false)}>Contact</Link></div>
                                </div>
                                <div className="menu-container" style={{ marginTop: 30 }}>
                                </div>
                            </div>
                        </Fade>
                    </div>

            </div>

        </section>
    );
};

const Content = () => {
    return (
        <div>
            <Fade left duration={500} delay={600} distance="30px">
                <div className="mb-4">
                    <h1 className="primary-color">ISF</h1>
                    <h2>International Student Friendship</h2>
                    <p style={{ maxWidth: 550 }}>The Cal Poly International Student Friendship Club wants to build lasting friendships among international students, scholars and Christian American friends.</p>
                </div>

                {/* <Link to="about" smooth duration={500}>
                    <span className="button button-hero" data-cursor-text="Click me">
                        Tell me more
                    </span>
                </Link> */}
                <a href="https://forms.gle/7Gq5deDd9qZodrEF9"><span className="button button-hero">Fill out the interest form</span></a>
            </Fade>
        </div>
    );
}

export default Hero;