import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// import { useState } from "react";

const iconStyle = { fontSize: 23 };

// const PrivacyButton = () => {
//   const [showPrivacy, setShowPrivacy] = useState(false);

//   const handleMouseOver = () => {
//     setShowPrivacy(true);
//   }

//   // const handleClick = () => {
//   //   setShowPrivacy(true);
//   // }

//   const handleMouseOut = () => {
//     setShowPrivacy(false);
//   }

//   return (
//     <div>
//       <button
//         onMouseOver={handleMouseOver}
//         //onClick={handleClick}
//         onMouseOut={handleMouseOut}
//         style={{border: 'none', textDecoration: 'underline'}}
//         >Privacy Terms
//       </button>
//       {showPrivacy && <div style={{textAlign: 'left'}}>
//       <ul>
//         <li>If you give your information to us to be invited to our events and programs, you have a right to expect that we will keep your information safe. We respect that. Here's what we do and don't do:</li>
//         <ul>
//           <li>Our team (staff, student leaders, and your Friendship Partner) will use your information to invite you to activities, and to get together for meals and social occasions.</li>
//           <li>We never have and never will share our mailing list with an outside organization for any reason.</li>
//           <li>We also want you to know that your data is secure with us.</li>
//           <li>One final note: We are happy to say that we have no connection to any government and just focus on loving international students here. We realize other organizations may use the “ISI” acronym. However, please be assured, International Students, Inc. is not associated with them in any way.</li>
//         </ul>
//       </ul>
// </div>}
//     </div>
//   )
// }

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={6} xs={12} className="footer-col mb-4 mb-md-0">
            <div>
              <h2>
                <a
                  href="https://isfcalpoly.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ISF
                </a>
              </h2>
              <p>More information on our Ins pages.</p>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/isf_calpoly/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="circle-icon">
                  <AiFillInstagram style={iconStyle} />
                </span>
              </a>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12} className="footer-col mb-4 mb-md-0">
            <div>
              <div className="menu-title">MENU</div>
              <div className="menu-item">
                <Link to="about" smooth duration={500}>
                  About
                </Link>
              </div>
              <div className="menu-item">
                <Link to="events" smooth duration={500}>
                  Past Events
                </Link>
              </div>
              <div className="menu-item">
                <Link to="calendar" smooth duration={500}>
                  Event Calendar
                </Link>
              </div>
              {/* link to a new page */}
              <div className="menu-item">
                <RouterLink to="/privacy">Privacy Policy</RouterLink>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12} className="footer-col">
            <div>
              <div className="menu-title">Contact us</div>
              <div className="menu-item">
                <a href="mailto:isfcalpoly@gmail.com">
                  Email: isfcalpoly@gmail.com
                </a>
              </div>
              <div className="menu-item">
                <a href="https://www.instagram.com/isf_calpoly/">
                  Instagram: @isf_calpoly
                </a>
              </div>
            </div>
          </Col>
          <div className="copyright">
            {" "}
            © {new Date().getFullYear()} ISF Cal Poly
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
