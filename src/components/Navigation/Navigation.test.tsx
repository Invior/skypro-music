import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";

describe("Компонент Navigation", () => {
  it("Должен отрендерить логотип", () => {
    render(<Navigation />);
    const img = screen.getByAltText("Skypro-logo");

    expect(img).toBeInTheDocument();
  });
});
