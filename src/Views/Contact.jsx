import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Fade bottom duration={500} delay={600} distance="30px">
                    <h1>Get in touch</h1>
                    <p>Would you like to attend our event?</p>
                    <a href="https://main.de8en6hw10wec.amplifyapp.com"><span className="button button-hero">fill out the google form</span></a>
                </Fade>
            </Container>
        </section>
    )
};

export default Contact;