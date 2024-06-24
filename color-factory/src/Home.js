import { Link } from "react-router-dom";
import './Home.css';

function Home({ colors }) {
  return (
    <>
      <h3><Link to='/colors/new'>Add a new color</Link></h3>

      <ul>
        {colors.map(color => <li key={color.name}><Link to={`/colors/${color.name}`}>{color.name}</Link></li>)}
      </ul>
    </>
  );
}

export default Home;
