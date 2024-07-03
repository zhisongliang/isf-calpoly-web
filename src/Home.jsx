import Hero from "./Views/Hero";
import About from "./Views/About";
import Events from "./Views/Events";
import Calendar from "./Views/Calendar";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <About />
      <Events />
      <Footer />
    </div>
  );
}

export default Home;
