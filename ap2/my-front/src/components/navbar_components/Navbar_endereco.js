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
    // return(
    //     <div>
    //         <p>CEP: {cep}</p>
    //         <p>BAIRRO: {bairro}</p>
    //         <p>CIDADE: {cidade}</p>
    //         <p>CEP: {rua}</p>
    //         <p>HORARIO: {horario}</p>
    //     </div>
    // );
}

export default Navbar_endereco