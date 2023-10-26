const Navbar_endereco = ({endereco}) =>{
    if(endereco){
        return(
            <div>
                <p>CEP: {endereco.cep}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>Rua: {endereco.rua}</p>
                <p>Horario: {endereco.horario}</p>
            </div>
        );        
    } else {
        return null;
    }
  
}

export default Navbar_endereco