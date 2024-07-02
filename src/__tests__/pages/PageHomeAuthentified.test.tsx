import PageHomeAuthentified from "@/pages/PageHomeAuthentified";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("component PageHomeAuthentified", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PageHomeAuthentified />
      </BrowserRouter>
    );
  });
  it("should contains header authentified", () => {
    const header = screen.getByTestId("header-authentified")
    expect(header).toBeInTheDocument()
  });
});
