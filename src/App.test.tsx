import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
    it('Should add a new task', () => {
        const { getByPlaceholderText, getByText } = render(<App />);
        
        const inputElement = getByPlaceholderText('what needs to be done?');
        const addButton = getByText('add todo');
        
        fireEvent.change(inputElement, { target: { value: 'todo 1' } });
        fireEvent.click(addButton);
        
        const todoText = getByText('todo 1');
        expect(todoText).toBeInTheDocument();
    });

    it('Should Toggle the Status of a Task When Checkbox Is Clicked', () => {
        const { getByText, getByPlaceholderText, getByRole } = render(<App />);
        
        const input = getByPlaceholderText('what needs to be done?');
        const addButton = getByText('add todo');
      
        fireEvent.change(input, { target: { value: 'todo 1' } });
        fireEvent.click(addButton);
      
        const checkbox = getByRole("checkbox") as HTMLInputElement;
        fireEvent.click(checkbox);
      
        expect(checkbox.checked).toBe(true);
    });

    it('Should Filter Tasks by Status', async () => {
        const { getByPlaceholderText, queryByText, getByText } = render(<App />);
        
        const input = getByPlaceholderText('what needs to be done?');
        const addButton = getByText('add todo');
      
        fireEvent.change(input, { target: { value: 'task 1' } });
        fireEvent.click(addButton);
        fireEvent.change(input, { target: { value: 'task 2' } });
        fireEvent.click(addButton);
      
        const activeButton = getByText('Active');
        const completedButton = getByText('Completed');

        let task1 = getByText('task 1');
        let task2: HTMLElement | null = getByText('task 2');
        
        fireEvent.click(task1);
      
        expect(task1).toBeInTheDocument();
        expect(task2).toBeInTheDocument();
      
        fireEvent.click(activeButton);

        const activeTask1 = queryByText('task 1');
        const activeTask2 = getByText('task 2');
      
        expect(activeTask1).not.toBeInTheDocument();
        expect(activeTask2).toBeInTheDocument();
      
        fireEvent.click(completedButton);

        const completedTask1 = getByText('task 1');
        const completedTask2 = queryByText('task 2');

        expect(completedTask1).toBeInTheDocument();
        expect(completedTask2).not.toBeInTheDocument();
    });
})