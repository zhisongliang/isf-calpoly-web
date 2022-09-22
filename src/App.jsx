import Hero from "./Views/Hero";
import About from "./Views/About";
import Events from "./Views/Events";
import Calendar from "./Views/Calendar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Events />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;