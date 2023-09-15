import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

const mockTodo = {
  id: '1',
  text: 'Test Todo',
  completed: false,
};
const mockToggleCallback = jest.fn();

describe('Todo component', () => {

    it('Todo component should render correctly', () => {
        render(<Todo todo={mockTodo} onTodoToggle={mockToggleCallback} />);
        
        const todoTextElement = screen.getByText('Test Todo');
        const checkboxElement = screen.getByRole('checkbox');
        
        expect(todoTextElement).toBeInTheDocument();
        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement).not.toBeChecked();
    });

    it('Todo component should render as completed when completed is true', () => {
        const completedTodo = { ...mockTodo, completed: true };
        render(<Todo todo={completedTodo} onTodoToggle={mockToggleCallback} />);
      
        const checkboxElement = screen.getByRole('checkbox');
      
        expect(checkboxElement).toBeChecked();
    });

    it('Toggle todo checkbox should call the provided callback', () => {
        render(<Todo todo={mockTodo} onTodoToggle={mockToggleCallback} />);
      
        const checkboxElement = screen.getByRole('checkbox');
        fireEvent.click(checkboxElement);
      
        expect(mockToggleCallback).toHaveBeenCalledWith('1');
    });
});