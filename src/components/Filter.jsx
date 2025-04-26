// Componente Filter recebe três props:
// - filter: valor atual do filtro selecionado (All, Completed, Pending)
// - setFilter: função para alterar o filtro
// - setSort: função para alterar a ordem alfabética (Asc ou Desc)
const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter"> {/* Container principal do filtro */}
            <h2>Filtrar:</h2>
            <div className="filter-options"> {/* Área das opções de filtro */}

                <div>
                    <p>Status:</p>
                    {/* Select para escolher o filtro de status das tarefas */}
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Pending">Incompletas</option>
                    </select>
                </div>

                <div>
                    <p>Ordem alfabética:</p>
                    {/* Botões que definem a ordem alfabética: crescente ou decrescente */}
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>

            </div>
        </div>
    );
};

export default Filter; // Exporta o componente para ser utilizado em outros arquivos
