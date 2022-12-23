import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

// const PrivacyButton = () => {
//   const [showPrivacy, setShowPrivacy] = useState(false);
  
//   const handleMouseOver = () => {
//     setShowPrivacy(true);
//   }

//   const handleMouseOut = () => {
//     setShowPrivacy(false);
//   }

//   return (
//     <div>
//       <button 
//         onMouseOver={handleMouseOver}
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

const Calendar = () => {
    return (
        <section id="calendar">
            <Container>
                <Fade bottom duration={500} delay={600} distance="30px">
                    <h1>Future Events</h1>
                    <p><b>Check out our upcoming events, click and sign up the google form!</b></p>
                    <p><b>If it is your first time to attend our events, please fill out this interest form first.</b></p>
                    <a href="https://forms.gle/zDk3ACKhfneJmtko8"><span className="button button-hero">Fill out the interest form</span></a>
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