import styled from 'styled-components';

export const Todo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    padding: 10px;

    border-radius: 7px;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px #D0DAEB, 0px 0px 2px 0px #EEF4FE;
`;

export const Checkbox = styled.input`
    margin: 7px 0 0;
`;

export const TodoText = styled.label`
    word-break: break-all;
`;