import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Dog from './Dog';
import Nav from './Nav';

function App(props) {
  const names = props.dogs.map(dog => dog.name);
  return (
    <div className="App">
      <Nav names={names}/>
      <Routes>
        <Route path='/dogs' element={<Home dogs={props.dogs}/>}/>
        <Route path='/dogs/:name' element={<Dog dogs={props.dogs}/>}/>
        <Route path='*' element={<Navigate to='/dogs'/>}/>
      </Routes>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      // src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      // src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      // src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      // src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
