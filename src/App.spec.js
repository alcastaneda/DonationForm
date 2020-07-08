import React from "react";
// import renderer from "react-test-renderer";
import { render } from "react-testing-library";

import App from "./App";

it("should render without crashing", () => {
  render(<App />);
});
