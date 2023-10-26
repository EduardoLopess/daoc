import { useState } from "react"


const OpcaoEgressoConvidado = (handleInputChange) => {
    const [opcaoEgressoConvidado, setOpcaoEgressoConvidado] = useState('');

    const handleOpcaoEgressoConvidado = (event) => {
        const value = event.target.value;
        setOpcaoEgressoConvidado(value);

        if (value === 'op1') {
            handleInputChange({ target: { name: 'egressoConvidado', value: 'Egresso' } });
        } else if (value === 'op2') {
            handleInputChange({ target: { name: 'egressoConvidado', value: 'Convidado' } });
        }else{
            handleInputChange({ target: { name: 'egressoConvidado', value: 'Estudante' } });
        }
    }

    const resetOpcaoEgressoConvidado = () => {
        setOpcaoEgressoConvidado('');
    }

    return {
        opcaoEgressoConvidado,
        handleOpcaoEgressoConvidado,
        resetOpcaoEgressoConvidado
    };
}


export default OpcaoEgressoConvidado



