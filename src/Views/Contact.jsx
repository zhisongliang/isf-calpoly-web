import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Fade bottom duration={500} delay={600} distance="30px">
                    <h1>Future Events</h1>
                    <p>Would you like to attend our incoming events?</p>
                    {/* <a href="isfcalpoly.org"><span className="button button-hero">fill out the google form</span></a> */}
                    <div><img src={require("../Images/bonfire.png")} alt="event1" data-cursor-text="Check out"/></div>
                </Fade>
            </Container>
        </section>
    )
};

export default Contact;