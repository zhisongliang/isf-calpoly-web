import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"; 
import { Link } from 'react-scroll';

const iconStyle = { fontSize: 23 };

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={6} xs={12} className="footer-col mb-4 mb-md-0">
                        <div>
                            <h2><a href="https://main.de8en6hw10wec.amplifyapp.com">ISF</a></h2>
                        </div>
                        <div>© Made by <b> ISF-Zhisong Liang</b> {new Date().getFullYear()}</div>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/ISFcalpoly/about/?ref=page_internal" className="social-link"><span className="circle-icon"><AiFillFacebook style={iconStyle} /></span></a>
                            <a href="https://www.instagram.com/isf_calpoly/" className="social-link"><span className="circle-icon"><AiFillInstagram style={iconStyle} /></span></a>
                        </div>
                    </Col>

                    <Col lg={3} sm={6} xs={12} className="footer-col mb-4 mb-md-0">
                        <div>
                            <div className="menu-title">MENU</div>
                            <div className="menu-item"><Link to="about" smooth duration={500} >About</Link></div>
                            <div className="menu-item"><Link to="details" smooth duration={500}>Details</Link></div>
                            <div className="menu-item"><Link to="contact" smooth duration={500}>Contact</Link></div>
                        </div>
                    </Col>

                    <Col lg={3} sm={6} xs={12} className="footer-col">
                        <div>
                            <div className="menu-title">OTHER LINKS</div>
                            <div className="menu-item"><a href="https://main.de8en6hw10wec.amplifyapp.com">Sample 1</a></div>
                            <div className="menu-item"><a href="https://main.de8en6hw10wec.amplifyapp.com">Sample 2</a></div>
                            <div className="menu-item"><a href="https://main.de8en6hw10wec.amplifyapp.com">Sample 3</a></div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
};

export default Footer;