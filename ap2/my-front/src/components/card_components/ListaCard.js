import Card from "./Card";

const ListaCard = ({lista}) => {
    return(
        <div className="listaCard">
            {lista.map((item, index) =>(
                <Card
                    key={index}
                    nome={item.nome}
                    telefone={item.telefone}
                    egressoConvidado={item.egressoConvidado}
                    pagamento={item.pagamento}
                    foto={item.foto}
                />
            ))}
        </div>
    );
}

export default ListaCard