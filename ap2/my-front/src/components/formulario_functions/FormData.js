import { useState } from "react"
import Navbar from '../navbar_components/Navbar'

const FormData = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        egressoConvidado: '',
        pagamento: '',
        foto: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    const resetCamposNomeETelefone = () => {
        setFormData({
            ...formData,
            nome: '',
            telefone: '',
            foto: ''
        });
    }
    
    return {
        formData,
        handleInputChange,
        resetCamposNomeETelefone
    }
}

export default FormData
