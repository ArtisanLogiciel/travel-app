import PageForbidden from "@/pages/PageForbidden";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Component PageForbidden", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PageForbidden />
      </BrowserRouter>
    );
  });
  it('should contains title "Vous devez être connecté pour afficher cette page"', () => {
    const title = screen.getByRole("heading", {
      level: 1,
      name: /Vous devez être connecté pour afficher cette page/i,
    });
    expect(title).toBeInTheDocument();
  });
  it('should contains Link "Connexion"', () => {
    const link = screen.getAllByRole("link", { name: /connexion/i });
    expect(link[0]).toBeInTheDocument();
    expect(link[1]).toBeInTheDocument();
  });
  it(' Link "Connexion" should redirect to login page', () => {
    const link = screen.getAllByRole("link", { name: /connexion/i });
    expect(link[0]).toHaveAttribute("href", "/login");
    expect(link[1]).toHaveAttribute("href", "/login");
  });
  it("header should be headerUnauthentified", () => {
    const header = screen.getByTestId("header-unauthentified");
    expect(header).toBeInTheDocument();
  });
});
