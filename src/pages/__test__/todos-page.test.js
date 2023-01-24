import { render, screen } from "@testing-library/react";
import TodosPage from "../todos-page";
import userEvent from "@testing-library/user-event";

describe("adding functionalty", () => {
  it("should render new task in the list", () => {
    render(<TodosPage />);
    const buttonEl = screen.getByRole("button", { name: "Add" });
    const inputEl = screen.getByPlaceholderText(/Type some text/i);
    userEvent.type(inputEl, "Hello React");
    userEvent.click(buttonEl);
    const listItemEl = screen.getByText(/hello react/i);
    expect(listItemEl).toBeInTheDocument();
  });
});
