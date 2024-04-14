import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders tasks ", () => {
    render(<App />);
    const container = render(<App />);
  });
});
