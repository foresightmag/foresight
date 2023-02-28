import './App.css';
import Card from "./components/Card"
import Nav from "./components/Nav"
import Hero from "./components/Hero"

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      
      <marquee className="marquee" style={{ color: 'black', fontSize: '2em', loop: -1 }}>
        A magazine designed for student by students. A magazine designed for student by students.
      </marquee>
      

      <div className="about">
        <h1 className="about-title">About the mag!</h1>
        <div className="about-content">
          <p >Thirdly, women in STEM can serve as role models and inspire future generations. Young girls need to see that women can succeed in traditionally male-dominated fields. By showcasing successful women in STEM, we can encourage young girls to pursue their dreams and break down gender stereotypes. </p>
          <p >Lastly, women in STEM can help to solve some of the world's most pressing issues. From climate change to global health, STEM has a significant role to play in finding solutions to these problems. By including more women in STEM, we can ensure that diverse perspectives are brought to the table, which can lead to more effective and innovative solutions.</p>
          <p> In conclusion, the concept of women in STEM is more important than ever before. By breaking down barriers and encouraging more women to pursue STEM careers, we can drive progress, promote innovation, and create a more equitable society. The future is bright for women in STEM, and it's up to us to ensure that they have the support and resources they need to succeed.</p>
        </div>
      </div>

     <h1 className='font'>Get to know the team</h1>  

     <div className='CardContainer'>
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
