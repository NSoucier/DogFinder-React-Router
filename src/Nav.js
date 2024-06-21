import { Link } from "react-router-dom";
import './Nav.css'

function Nav({ names }) {
    return (
        <ul>
            <li><Link to='/dogs'>Home</Link></li>
            {names.map(name => <li key={name}><Link to={`/dogs/${name}`}>{name}</Link></li>)}
            
        </ul>
    )
}

export default Nav;