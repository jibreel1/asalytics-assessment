import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Features from "./Features";

afterEach(() => {
   cleanup();
});

test("renders title", () => {
   render(<Features />);
   const title = screen.getByTestId("feature-text");
   expect(title).toBeInTheDocument();
});
