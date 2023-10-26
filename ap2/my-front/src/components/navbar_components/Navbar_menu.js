import { useEffect, useState } from 'react';
import '../../styles/navbar_styles/Navbar_menu.css'
import Navbar_endereco from '../navbar_components/Navbar_endereco'


const Navbar_menu = () => {
    const [endereco, setEndereco] = useState(null);
    const [cep] = useState('95560000');
    const [mostrarEndereco, setMostrarEndereco] = useState(false);
//93037596
    const handleClick = async () => {
        try {
            const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            setEndereco(data);
            setMostrarEndereco(!mostrarEndereco);
        } catch (error) {
          console.error('Falha ao encontrar endereço:', error);
        }
      };
      
      return (
        <div className="navbar_menu">
            <button onClick={handleClick}>LOCALIZAÇÃO</button>
                {mostrarEndereco && (
                <>
                  <Navbar_endereco endereco={endereco} />  
                </>
            )}
        </div>
      );     
         
}

export default Navbar_menu; 

