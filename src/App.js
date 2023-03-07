import './App.css';
import Card from "./components/Card"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      
      <marquee className="marquee" style={{ color: 'black', fontSize: '2em', loop: -1 }}>
        A magazine designed for student by students. A magazine designed for student by students.
      </marquee>

      <About/>

     <h1 className='font'>Get to know the team</h1>  

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
