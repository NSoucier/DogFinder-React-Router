import { Route, Routes, Navigate, BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Color from "./Color";
import Form from "./Form";
import "./App.css";

function App() {
  const [ colors, setColors ] = useState([{hexColor: '#B5D3D0', name: 'slate'}, {hexColor: '#EAEA18', name: 'banana'}])
  const addColor = (hexColor, name) => {
    setColors([{hexColor, name}, ...colors])
  };
  return (
    <div className="App">
      <h1>Welcome to the color factory.</h1>
      <Link to='/colors'>Home</Link>
      <hr></hr>
      <Routes>
        <Route path="/colors" element={<Home colors={colors} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="/colors/new" element={<Form addColor={addColor}/>} />
        <Route path='*' element={<Navigate to='/colors'/>} />
      </Routes>
    </div>
  );
}

export default App;


