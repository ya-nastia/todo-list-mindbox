import React from 'react';
import { ITodo } from '../../types/common.types';
import * as S from './Todo.styled';

interface ITodoProps {
    todo: ITodo;
    onTodoToggle: (id: string) => void;
}

const Todo: React.FC<ITodoProps>  = ({ todo, onTodoToggle }) => {
    return (
        <S.Todo>
            <S.Checkbox id={todo.id} type="checkbox" checked={todo.completed} onChange={() => onTodoToggle(todo.id)}/>
            <S.TodoText htmlFor={todo.id}>{todo.text}</S.TodoText>
        </S.Todo>
    )
};

export default Todo;