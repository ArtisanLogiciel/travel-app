import PageForbidden from "@/components/pages/PageForbidden";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";

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
    const link = screen.getByRole("link", { name: /connexion/i });
    expect(link).toBeInTheDocument();
  });
  it(' Link "Connexion" should redirect to login page', () => {
    const link = screen.getByRole("link", { name: /connexion/i });
    expect(link).toHaveAttribute("href", "/login");
  });
});
