import { render } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("renders tasks ", () => {
    const tasks = [
      { id: 1, title: "task 1" },
      { id: 2, title: "task 2" },
    ];
    const { container } = render(<List tasks={tasks} />);
    expect(container).toHaveTextContent("task 1");
    expect(container).toHaveTextContent("task 2");

  });
});
