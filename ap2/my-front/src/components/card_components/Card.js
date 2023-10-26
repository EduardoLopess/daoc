import '../../styles/card_styles/Card.css'

const Card = ({ nome, telefone, egressoConvidado, pagamento, foto }) => {
    return(
        <div>
            <div className="card">
                <img src={foto} alt="Foto" />
                <h2>{nome}</h2>
                <p>{telefone}</p>
                <p>{egressoConvidado}</p>
                <p>{pagamento}</p>
            </div>
        </div>
    );
}
export default Card