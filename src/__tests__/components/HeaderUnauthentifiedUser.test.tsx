import HeaderUnauthentifiedUser from "@/components/HeaderUnauthentifiedUser";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, test } from "vitest";

describe("Composant  HeaderUnAuthentifiedUser", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HeaderUnauthentifiedUser />
      </BrowserRouter>
    );
  });

  test("should contains 'Accueil' Link", () => {
    const homeLink = screen.getByRole("link", { name: /accueil/i });
    expect(homeLink).toBeInTheDocument();
  });
  test(" 'Accueil' Link should redirects to home", () => {
    const homeLink = screen.getByRole("link", { name: /accueil/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
  test("should contains 'Connexion' Link", () => {
    const loginLink = screen.getByRole("link", { name: /connexion/i });
    expect(loginLink).toBeInTheDocument();
  });
  test("loginLink should contains  attribute  href= '/login'", () => {
    const loginLink = screen.getByRole("link", { name: /connexion/i });
    expect(loginLink).toHaveAttribute("href", "/login");
  });
  test("should contains 'Inscription' Link", () => {
    const registerLink = screen.getByRole("link", { name: /connexion/i });
    expect(registerLink).toBeInTheDocument();
  });
  test("registerLink should redirect to Inscription page", () => {
    const registerLink = screen.getByRole("link", { name: /inscription/i });
    expect(registerLink).toHaveAttribute("href", "/register");
  });
});
