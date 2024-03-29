import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

const Calendar = () => {
    return (
        <section id="calendar">
            <Container>
                <Fade direction="up" duration={500} delay={200} triggerOnce>
                    <h1>Future Events</h1>
                    <p><b>Check out our upcoming events, click and sign up the google form!</b></p>
                    <p><b>If it is your first time to attend our events, please fill out this interest form first.</b></p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0hn7QdQ20TS9J_87EUOPMPR6KtsE6pJpnIylOokfuj60MIA/viewform?usp=sf_link"><span className="button button-hero">Fill out the interest form</span></a>
                    <br /><br /> 
                    {/* <div><img src={require("../Images/bonfire.png")} alt="event1" data-cursor-text="Check out"/></div> */}
                    <ReactEmbeddedGoogleCalendar className="calender"
                    publicUrl = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23e18351&ctz=America%2FLos_Angeles&showTitle=0&showTz=0&showCalendars=0&showPrint=0&mode=MONTH&title=check%20out%20our%20upcoming%20events%20below%2C%20click%20events%20and%20sign%20up!&showDate=1&showNav=1&src=aXNmY2FscG9seUBnbWFpbC5jb20&color=%23EF6C00" 
                    height="600px"/>
                </Fade>
            </Container>
        </section>
    )
};

export default Calendar;
