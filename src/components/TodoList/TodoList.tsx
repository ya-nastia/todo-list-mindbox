import React, { useMemo } from "react";
import { ITodo, TDisplayStatus } from "../../types/common.types";
import * as S from './TodoList.styled';
import { Todo } from "../Todo";

interface ITodoListProps {
    todos: ITodo[];
    onTodoToggle: (id: string) => void;
    displayStatus: TDisplayStatus;
}

const TodoList: React.FC<ITodoListProps> = ({todos, onTodoToggle, displayStatus}) => {

    const filteredTodos = useMemo(() => {
        switch (displayStatus) {
            case 'all':
                return todos.map(todo => <Todo todo={todo} key={todo.id} onTodoToggle={onTodoToggle} />)
            case 'active':
                return todos.filter(todo => todo.completed === false).map(todo => <Todo todo={todo} key={todo.id} onTodoToggle={onTodoToggle} />)
            case 'completed':
                return todos.filter(todo => todo.completed === true).map(todo => <Todo todo={todo} key={todo.id} onTodoToggle={onTodoToggle} />)
            default:
                return;
        }
    }, [displayStatus, onTodoToggle, todos]);

    return (
        <S.TodoList>
            {
                todos.length === 0 ? 
                <div>No todos</div> : filteredTodos
            }
        </S.TodoList>
    )
};

export default TodoList;