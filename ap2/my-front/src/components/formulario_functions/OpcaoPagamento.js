import { useState } from "react"

const OpcaoPagamento = (handleInputChange) => {
    const [opcaoPagamento, setOpcaoPagamento] = useState('');

    const handleOpcaoPagamento = (event) => {
        const value = event.target.value;
        setOpcaoPagamento(value);

        if (value === 'op1') {
            handleInputChange({ target: { name: 'pagamento', value: 'Pago' } });
        } else {
            handleInputChange({ target: { name: 'pagamento', value: 'Não Pago' } });
        }
    }
    const resetOpcaoPagamento = () => {
        setOpcaoPagamento('');
    }

    return {
        opcaoPagamento,
        handleOpcaoPagamento,
        resetOpcaoPagamento
    };
}

export default OpcaoPagamento;



