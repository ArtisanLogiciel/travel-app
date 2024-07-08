import UnreachablePage from "@/pages/UnreachablePage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";

describe("Component PageUnreachable", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UnreachablePage />
      </BrowserRouter>
    );
  });
  it("should contains title 'La page demandée n'existe pas'", () => {
    const title = screen.getByRole("heading", {
      level: 1,
      name: /La page demandée n'existe pas/i,
    });
    expect(title).toBeInTheDocument();
  });
  it("should contains Link 'Connexion'", () => {
    const link = screen.getByRole("link", {
      name: /connexion/i,
    });
    expect(link).toBeInTheDocument();
  });
  it("Link 'Connexion' should redirects to login page", () => {
    const link = screen.getByRole("link", {
      name: /connexion/i,
    });
    expect(link).toHaveAttribute("href", "/login");
  });
});
