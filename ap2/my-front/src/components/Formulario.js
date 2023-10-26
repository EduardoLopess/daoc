import React, { useState } from 'react';
import '../styles/Formulario.css';
import FormData from './formulario_functions/FormData';
import OpcaoEgressoConvidado from './formulario_functions/OpcaoEgressoConvidado';
import OpcaoPagamento from './formulario_functions/OpcaoPagamento';
import ListaCard from './card_components/ListaCard'; 

const Formulario = () => {
    const { formData, handleInputChange, resetCamposNomeETelefone } = FormData();
    const { opcaoEgressoConvidado, handleOpcaoEgressoConvidado, resetOpcaoEgressoConvidado } = OpcaoEgressoConvidado(handleInputChange);
    const { opcaoPagamento, handleOpcaoPagamento, resetOpcaoPagamento } = OpcaoPagamento(handleInputChange);
    const [listaDeFormularios, setListaDeFormularios] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        resetOpcaoEgressoConvidado(); 
        resetOpcaoPagamento();
        resetCamposNomeETelefone();
        setListaDeFormularios([...listaDeFormularios, formData]); 
    }

    return (
        <div className="formulario"> 
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        placeholder="Digite seu nome" 
                        value={formData.nome} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="campo">
                    <label htmlFor="telefone">Telefone:</label>
                    <input 
                        type="tel" 
                        id="telefone" 
                        name="telefone"
                        pattern="[0-9]*"
                        placeholder="Digite seu telefone" 
                        value={formData.telefone} 
                        onChange={handleInputChange} 
                    />
                </div>
                <label className='campo'>Egresso/Convidado </label>
                <div className='radioContainer'>
                    <input
                        type="radio"
                        value="op1"
                        name='opcaoEgressoConvidado'
                        checked={opcaoEgressoConvidado === 'op1'}
                        onChange={handleOpcaoEgressoConvidado}
                    />
                    Egresso
                    <input
                        type="radio"
                        value="op2"
                        name='opcaoEgressoConvidado'
                        checked={opcaoEgressoConvidado === 'op2'}
                        onChange={handleOpcaoEgressoConvidado}
                    />
                    Convidado
                </div>
                <label className='campo'>Pago </label>
                <div className='radioContainer'>
                    <input
                        type="radio"
                        value="op1"
                        name='opcaoPagamento'
                        checked={opcaoPagamento === 'op1'}
                        onChange={handleOpcaoPagamento}
                    />
                    Sim
                    <input
                        type="radio"
                        value="op2"
                        name='opcaoPagamento'
                        checked={opcaoPagamento === 'op2'}
                        onChange={handleOpcaoPagamento}
                    />
                    Não
                </div>
                <div className="campo">
                    <label htmlFor="foto">Foto:</label>
                    <input 
                        type="text" 
                        id="foto" 
                        name="foto" 
                        placeholder="Digite a url" 
                        value={formData.foto} 
                        onChange={handleInputChange} 
                    />
                </div>
                <button type="submit">CADASTRAR</button>
                
            </form>
            {listaDeFormularios.length > 0 && <ListaCard lista={listaDeFormularios} />}
        
        </div>
    );
}

export default Formulario;
