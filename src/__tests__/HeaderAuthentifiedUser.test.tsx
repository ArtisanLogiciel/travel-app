import HeaderAuthentifiedUser from "@/components/HeaderAuthentifiedUser";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, test } from "vitest";

describe("headerAuthentificationUser component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HeaderAuthentifiedUser />
      </BrowserRouter>
    );
  });
  it("should contains a header", () => {
    const header = screen.getByRole("banner")
    expect(header).toBeInTheDocument()
  });
  test("should contains 'Accueil' Link", () => {
    const homeLink = screen.getByRole("link", { name: /accueil/i });
    expect(homeLink).toBeInTheDocument();
  });
  test(" 'Accueil' Link should redirects to home", () => {
    const homeLink = screen.getByRole("link", { name: /accueil/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
  test("should contains 'Mon compte' Link", () => {
    const accountLink = screen.getByRole("link", { name: /Mon compte/i });
    expect(accountLink).toBeInTheDocument();
  });
  test("accountLink should contains  attribute  href= '/my-account'", () => {
    const accountLink = screen.getByRole("link", { name: /Mon compte/i });
    expect(accountLink).toHaveAttribute("href", "/my-account");
  });
  test("should contains 'Se déconnecter' Link", () => {
    const logoutLink = screen.getByRole("link", { name: /Déconnexion/i });
    expect(logoutLink).toBeInTheDocument();
  });
  test("registerLink should redirect to Inscription page", () => {
    const logoutLink = screen.getByRole("link", { name: /Déconnexion/i });
    expect(logoutLink).toHaveAttribute("href", "/");
  });
});
