import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

const mockTodos = [
    { id: "1", text: "Todo 1", completed: false },
    { id: "2", text: "Todo 2", completed: true },
  ];

  describe("TodoList Component", () => {

    it("renders 'No todos' when there are no todos", () => {
      const { getByText } = render(
        <TodoList todos={[]} onTodoToggle={() => {}} displayStatus="all" />
      );

      const noTodosElement = getByText("No todos");
      expect(noTodosElement).toBeInTheDocument();
    });

    it("renders todos correctly when displayStatus is 'all'", () => {
        const { getByText } = render(
          <TodoList todos={mockTodos} onTodoToggle={() => {}} displayStatus="all" />
        );
    
        mockTodos.forEach((todo) => {
          const todoElement = getByText(todo.text);
          expect(todoElement).toBeInTheDocument();
        });
    });

    it("renders active todos correctly when displayStatus is 'active'", () => {
        const { getByText, queryByText } = render(
          <TodoList
            todos={mockTodos}
            onTodoToggle={() => {}}
            displayStatus="active"
          />
        );
    
        const completedTodo = queryByText("Todo 2");
        expect(completedTodo).not.toBeInTheDocument();
    
        const activeTodo = getByText("Todo 1");
        expect(activeTodo).toBeInTheDocument();
    });

    it("renders completed todos correctly when displayStatus is 'completed'", () => {
        const { getByText, queryByText } = render(
          <TodoList
            todos={mockTodos}
            onTodoToggle={() => {}}
            displayStatus="completed"
          />
        );
    
        const activeTodo = queryByText("Todo 1");
        expect(activeTodo).not.toBeInTheDocument();
    
        const completedTodo = getByText("Todo 2");
        expect(completedTodo).toBeInTheDocument();
    });
  
});