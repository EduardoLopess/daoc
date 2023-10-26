import logo from "../assets/logo.png"
import '../styles/Header.css'

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="Logo"/>
            <h1>Entrevero</h1>
        </div>
        
    )
}

export default Header;