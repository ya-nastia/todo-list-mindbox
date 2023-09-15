import { fireEvent, render } from "@testing-library/react";
import Input from "./Input";

describe('Input component', () => {

    it("Input renders correctly", () => {
        const { getByPlaceholderText, getByText } = render(<Input onClick={() => {}} />);
        
        const inputElement = getByPlaceholderText("what needs to be done?");
        const addButtonElement = getByText("add todo");
        
        expect(inputElement).toBeInTheDocument();
        expect(addButtonElement).toBeInTheDocument();
    });

    it("Input handles input change", () => {
        const { getByPlaceholderText } = render(<Input onClick={() => {}} />);
        const inputElement = getByPlaceholderText("what needs to be done?") as HTMLInputElement;
        
        fireEvent.change(inputElement, { target: { value: "Test todo" } });
        
        expect(inputElement.value).toBe("Test todo");
    });

    it("Input calls onClick handler on submit", () => {
        const onClickMock = jest.fn();
        const { getByPlaceholderText, getByText } = render(<Input onClick={onClickMock} />);
        
        const inputElement = getByPlaceholderText("what needs to be done?") as HTMLInputElement;
        const addButtonElement = getByText("add todo");
        
        fireEvent.change(inputElement, { target: { value: "Test todo" } });
        fireEvent.click(addButtonElement);
        
        expect(onClickMock).toHaveBeenCalledWith("Test todo");
        expect(inputElement.value).toBe("");
    });

    it("Input button is disabled when inputValue is empty", () => {
        const { getByText } = render(<Input onClick={() => {}} />);
        const addButtonElement = getByText("add todo");
        
        expect(addButtonElement).toBeDisabled();
    });
})