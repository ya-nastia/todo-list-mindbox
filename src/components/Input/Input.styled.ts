import styled from 'styled-components';

export const InputForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputFormElement = styled.div`
    padding: 4px 8px;

    font-size: 16px;

    border: 1px solid #000000;
    border-radius: 8px;

    &:disabled {
        color: #949494;
        border: 1px solid #B8B8B8;
    }
`;