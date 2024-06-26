import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Form({ addColor }) {
  const initialState = { color: "#88FFBE", name: "" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    addColor(formData.color, formData.name);
    setFormData(initialState);
    navigate(`colors`);
  };
  return (
    <>
      <p>Choose a color and a name</p>
      <input 
        id="color"
        type="color" 
        value={formData.color} 
        name="color"
        onChange={handleChange} />
      <input 
        id="name"
        type="text"
        name="name"
        placeholder="color name"
        onChange={handleChange} />
      <button onClick={handleClick}>Add my color!</button>
    </>
  );
}

export default Form;
