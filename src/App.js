import './css/App.css';

function Card(props){
 return (
  <div className='Card' href='/'>
    <a href= "/" className='CardInside'>{props.name}</a>
  </div>
 );
}


function App() {
  
  return (
    <div className="App">

     <h1 className='font'>Get to know the team</h1>
     <div className='CardContainer'>
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
