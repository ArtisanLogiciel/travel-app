import HomeUnauthentifiedPage from "@/pages/HomeUnauthentifiedPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("component PageHomeAuthentified", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomeUnauthentifiedPage />
      </BrowserRouter>
    );
  });
  it("should contains header unauthentified", () => {
    const header = screen.getByTestId("header-unauthentified");
    expect(header).toBeInTheDocument();
  });
});
