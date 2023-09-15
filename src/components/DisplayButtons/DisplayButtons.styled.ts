import styled from 'styled-components';

export const DisplayButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 10px 0;
`;

export const Button = styled.button<{ isActive: boolean }>`
    padding: 4px 8px;

    font-size: 12px;

    background-color: transparent;
    border: ${({isActive}) => isActive ? '1px solid #ECD7D7 !important' : 'none'};
    border-radius:  ${({isActive}) => isActive ? '4px' : '0'};
    cursor: pointer;
`;