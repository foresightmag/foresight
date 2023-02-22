import './App.css';

function Card(){
 return (
  <div className='Card' href='/'>
    <div className='CardInside'></div>
  </div>
 );
}


function App() {
  
  return (
    <div className="App">
      <h1>Get to know the team</h1>
     <div className='CardContainer MAIN'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </div>
  );
}

export default App;
