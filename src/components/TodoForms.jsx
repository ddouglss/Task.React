import { useState } from 'react'; // Importa o hook useState do React

// Componente funcional que recebe a função addTodo como props
const TodoForms = ({ addTodo }) => {

    // Estados locais para armazenar o valor do input e da categoria
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    // Função que lida com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Verifica se os campos foram preenchidos
        if (!value || !category) return;

        // Chama a função do pai para adicionar a nova tarefa
        addTodo(value, category);

        // Limpa os campos após adicionar
        setValue("");
        setCategory("");
    };

    // JSX que renderiza o formulário
    return (
        <div className="todo-form">
            <h2>Criar tarefa</h2>

            {/* Formulário com função de envio handleSubmit */}
            <form onSubmit={handleSubmit}>

                {/* Campo de texto para o título da tarefa */}
                <input
                    type="text"
                    placeholder="Digite o título"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />

                {/* Select para escolher a categoria da tarefa */}
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>

                {/* Botão para criar tarefa */}
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoForms; // Exporta o componente para ser usado em outros lugares
