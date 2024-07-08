import AccountPage from "@/pages/AccountPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("component page Account", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AccountPage />
      </BrowserRouter>
    );
  });
  it("should contains title 'Mon compte'", () => {
    const title = screen.getByRole("heading", {
      level: 1,
      name: /Mon compte/i,
    });
    expect(title).toBeInTheDocument();
  });
  it("should contains a header with data-test-id equals header-authentified", () => {
    const header = screen.getByTestId("header-authentified");
    expect(header).toBeInTheDocument();
  });
});
