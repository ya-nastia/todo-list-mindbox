import React from 'react';
import { TDisplayStatus } from '../../types/common.types';
import * as S from './DisplayButtons.styled';

interface IDisplayButtonsProps {
    displayStatus: TDisplayStatus;
    onStatusChange: (status: TDisplayStatus) => void;
}

const DisplayButtons: React.FC<IDisplayButtonsProps> = ({
    displayStatus, 
    onStatusChange,
}) => {
    return (
        <S.DisplayButtons>
            <S.Button
                isActive={displayStatus === 'all'}
                onClick={() => onStatusChange('all')}
            >
                All
            </S.Button>
            <S.Button
                isActive={displayStatus === 'active'}
                onClick={() => onStatusChange('active')}
            >
                Active
            </S.Button>            
            <S.Button
                isActive={displayStatus === 'completed'}
                onClick={() => onStatusChange('completed')}
            >
                Completed
            </S.Button>
        </S.DisplayButtons>
    )
};

export default DisplayButtons;