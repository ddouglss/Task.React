import React from 'react'; // Importa o React para poder usar JSX

// Componente Todo recebe três props:
// - todo: objeto com os dados da tarefa (texto, categoria, status)
// - removeTodo: função para remover uma tarefa
// - completeTodo: função para marcar tarefa como completa ou incompleta
const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        // Div principal da tarefa com uma estilização condicional
        // Se a tarefa estiver concluída, aplica um "risco" no texto
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
        >
            <div className="content"> {/* Conteúdo da tarefa */}
                <p>{todo.text}</p> {/* Título da tarefa */}
                <p className="category">({todo.category})</p> {/* Categoria da tarefa */}
            </div>
            <div> {/* Ações da tarefa */}
                {/* Botão para alternar entre tarefa completa e pendente */}
                <button className="complete" onClick={() => completeTodo(todo.id)}>
                    Completar
                </button>
                {/* Botão para remover a tarefa */}
                <button className="remove" onClick={() => removeTodo(todo.id)}>
                    x
                </button>
            </div>
        </div>
    );
};

export default Todo; // Exporta o componente para uso em outros arquivos
