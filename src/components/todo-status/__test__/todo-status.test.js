const { render, screen } = require("@testing-library/react");
const { default: TodoStatus } = require("../todo-status");

it("should render singular job text", () => {
  render(<TodoStatus count={1} />);
  const statusEl = screen.getByText(/1 job left/i);
  expect(statusEl).toBeInTheDocument();
});

it("should render singular job text", () => {
  render(<TodoStatus count={10} />);
  const statusEl = screen.getByText(/10 jobs left/i);
  expect(statusEl).toBeInTheDocument();
});
