import './App.css';
import Card from "./components/Card"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import About from "./components/About"

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Hero/>

      <Marquee/>

      <About/>

     <h1 className='get-to-know-the-team'>Get to know the team</h1>  

      <div className='CardContainer'>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
        <Card name="John Doe"/>
      </div>
      
    </div>
  );
}

export default App;
