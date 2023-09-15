import { fireEvent, render } from "@testing-library/react";
import DisplayButtons from "./DisplayButtons";

const mockOnStatusChange = jest.fn();

describe('DisplayButtons component', () => {
    
    it('renders DisplayButtons with initial status "all"', () => {
        const { getByText } = render(
          <DisplayButtons displayStatus="all" onStatusChange={() => {}} />
        );
        const allButton = getByText('All');
        expect(allButton).toBeInTheDocument();
        expect(allButton).toHaveStyle("border-width: 2px");
    });

    it('calls onStatusChange with "active" when Active button is clicked', () => {
        const { getByText } = render(
          <DisplayButtons displayStatus="all" onStatusChange={mockOnStatusChange} />
        );
        const activeButton = getByText('Active');
        fireEvent.click(activeButton);
        expect(mockOnStatusChange).toHaveBeenCalledWith('active');
    });

    it('calls onStatusChange with "completed" when Active button is clicked', () => {
        const { getByText } = render(
          <DisplayButtons displayStatus="all" onStatusChange={mockOnStatusChange} />
        );
        const completedButton = getByText('Completed');
        fireEvent.click(completedButton);
        expect(mockOnStatusChange).toHaveBeenCalledWith('completed');
    });

    it('calls onStatusChange with "all" when Active button is clicked', () => {
        const { getByText } = render(
          <DisplayButtons displayStatus="completed" onStatusChange={mockOnStatusChange} />
        );
        const allButton = getByText('All');
        fireEvent.click(allButton);
        expect(mockOnStatusChange).toHaveBeenCalledWith('all');
    });
});