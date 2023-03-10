import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "../todo-input";

//Alttaki mockedAddTodo fonksiyonu sahte ve boş bir fonksiyondur
//render(<TodoInput addTodo={mockedAddTodo}/>); satırındaki test fonksiyonu
//istenildiği şekilde çalışmadığı için ekledik.
//Asıl test edilen fonksiyondaki addTodo nun hata vermesini engelledik
const mockedAddTodo = jest.fn();
// const mockedAddTodo = () => {};

test("should render the button as disabled if textbox contains no char", () => {
  render(<TodoInput />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

it("should render the button as enabled if textbox contains some char", () => {
  render(<TodoInput />);
  const buttonEl = screen.getByRole("button");
  const inputEl = screen.getByRole("textbox");
  userEvent.type(inputEl, "Hello React");
  expect(inputEl.value).toBe("Hello React");
  expect(buttonEl).toBeEnabled();
});

it("input should be empty when click the button", () => {
  render(<TodoInput addTodo={mockedAddTodo} />);
  const buttonEl = screen.getByRole("button");
  const inputEl = screen.getByRole("textbox");
  userEvent.type(inputEl, "Hello React");
  userEvent.click(buttonEl);
  expect(inputEl).toHaveFocus();
  expect(inputEl.value).toBe("");
});
