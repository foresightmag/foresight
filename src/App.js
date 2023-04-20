import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import InterviewContainer from "./components/InterviewContainer";
import Footer from "./components/Mobile/Footer"

function App() {
    return (
    <div className="App">
      <Nav /> 
      <Hero />

      <Marquee />

      <About />

      <h1 className="get-to-know-the-team">Get to know the team</h1>
      <div className="CardContainer">
        <Card name="John Doe" />
        <Card name="John Doe" />
        <Card name="John Doe" />
        <Card name="John Doe" />
        <Card name="John Doe" />
        <Card name="John Doe" />
        <Card name="John Doe" />
        <Card name="John Doe" />
      </div>

      <InterviewContainer ID="jumpToSI" Title="Student Interview" />
      <InterviewContainer ID="jumpToPI" Title="Professor Interview" />
      <InterviewContainer ID="jumpToGL" Title="Global" />

      <Footer/>
      
    </div>
  );
}

export default App;
