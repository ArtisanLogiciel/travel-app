import LoginPage from "@/pages/LoginPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";

describe("component PageLogin", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  });
  it("should contains form element", () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("should contains input email", () => {
    const input = screen.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();
  });
  it("should contains input password", () => {
    const input = screen.getByLabelText(/Mot de passe/i);
    expect(input).toBeInTheDocument();
  });
  it("should contains input submit", () => {
    const input = screen.getByRole("button", { name: "Se connecter" });
    expect(input).toBeInTheDocument();
  });
  it("should contains link redirecting to login Page", () => {
    const link = screen.getByRole("link", { name: /s'inscrire/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/register");
  });
});
