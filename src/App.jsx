// App.jsx
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForms from './components/TodoForms';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';
import api from './services/api';

function App() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('Asc');

    // Função para buscar tarefas do backend
    const getList = async () => {
        try {
            const res = await api.get(`/api/todo?search=${search}`);
            setTodos(res.data);
        } catch (err) {
            console.error("Erro ao buscar tarefas da API:", err);
        }
    };

    // Carrega a lista ao iniciar ou ao mudar a busca
    useEffect(() => {
        getList();
    }, [search]);

    // Adiciona uma nova tarefa
    const addTodo = async (text, category) => {
        try {
            await api.post('/api/todo', {
                text,
                category,
                isCompleted: false
            });
            await getList(); // Atualiza lista após adicionar
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
        }
    };

    // Remove uma tarefa
    const removeTodo = async (id) => {
        try {
            await api.delete(`/api/todo/${id}`);
            setTodos(prev => prev.filter(todo => todo.id !== id));
        } catch (err) {
            console.error("Erro ao excluir tarefa:", err);
        }
    };

    // Alterna o status de conclusão da tarefa
    const completeTodo = async (id) => {
        const todo = todos.find(t => t.id === id);
        try {
            await api.put(`/api/todo/${id}`, {
                ...todo,
                isCompleted: !todo.isCompleted
            });
            setTodos(prev => prev.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
        } catch (err) {
            console.error("Erro ao atualizar tarefa:", err);
        }
    };

    // Filtra e ordena tarefas
    const filteredAndSortedTodos = todos
        .filter(todo =>
            filter === "All" ? true :
                filter === "Completed" ? todo.isCompleted :
                    filter === "Pending" ? !todo.isCompleted : true
        )
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text));

    return (
        <div className="app">
            <h1>Lista de Tarefas</h1>
            <Search search={search} setSearch={setSearch} />
            <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
            <div className="todo-list">
                {filteredAndSortedTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                    />
                ))}
            </div>
            <TodoForms addTodo={addTodo} />
        </div>
    );
}

export default App;
