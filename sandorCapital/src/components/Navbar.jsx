import { Link } from "react-router-dom"
import './Navbar.css'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navbar=()=>{



    return(
    <>
    <div className="Navbar">
        <Link className="NavbarTitle">SandorCapital</Link>
        <Link className="NavbarItem">Funds</Link>
        <Link className="NavbarItem">Investment</Link>
        <Link className="NavbarItem">Insights</Link>

    </div>
    <div style={{padding:"50px"}}></div>

    </>
    )
}
export default Navbar