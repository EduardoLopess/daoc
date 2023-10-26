import Navbar_menu from './Navbar_menu.js'
import '../../styles/navbar_styles/Navbar.css'
import Navbar_endereco from './Navbar_endereco.js';

const Navbar = ({nome}) =>{
    return(
        <div className="navbar">
            <h2>Seja Bem-vindo, {nome}</h2>
            <Navbar_menu/>
            <Navbar_endereco/>
        </div>
    );
}

export default Navbar

