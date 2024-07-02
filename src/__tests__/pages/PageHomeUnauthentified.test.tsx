import PageHomeUnauthentified from "@/pages/PageHomeUnauthentified";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("component PageHomeAuthentified", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PageHomeUnauthentified />
      </BrowserRouter>
    );
  });
  it("should contains header unauthentified", () => {
    const header = screen.getByTestId("header-unauthentified");
    expect(header).toBeInTheDocument();
  });
});
