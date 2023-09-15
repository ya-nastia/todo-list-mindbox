import React, { useCallback, useState } from "react";
import * as S from './Input.styled';

interface IInputProps {
    onClick: (todoText: string) => void
}

const Input: React.FC<IInputProps> = ({onClick}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClick(inputValue);
        setInputValue('');
    }, [inputValue, onClick]);

    return (
        <S.InputForm>
            <S.InputFormElement
                as="input" 
                value={inputValue} 
                onChange={handleInputChange} 
                type="text"
                placeholder="what needs to be done?" 
            />
            <S.InputFormElement
                as="button"
                type="submit" 
                onClick={onSubmit}
                disabled={!inputValue}
            >
                add todo
            </S.InputFormElement>
        </S.InputForm>
    )
};

export default Input;