import React from 'react';
import '../styles/Formulario.css';

const Formulario = () => {
    return (
        <div className="formulario">
            <form>
                <div className="campo">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />
                </div>
                <div className="campo">
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="telefone" id="telefone" name="telefone" placeholder="Digite seu telefone" />
                </div>
            </form>
        </div>
    );
}

export default Formulario;