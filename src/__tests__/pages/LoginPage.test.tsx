import LoginPage from "@/pages/LoginPage";
import { fireEvent, render, screen } from "@testing-library/react";
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
  
  // On vérifie que les composants du formulaires existent
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

  // On vérifie que les messages d'erreurs s'affichent correctement si les champs sont vides
  it("should display an error message when email is left empty and form is submitted", async () => {
    const submitButton = screen.getByRole("button", { name: "Se connecter" });
    fireEvent.click(submitButton);
  
    const emailErrorMessage = await screen.findByText(/L'email doit être valide/i);
    expect(emailErrorMessage).toBeInTheDocument();
  });
  it("should display an error message when password is left empty and form is submitted", async () => {
    fireEvent.submit(screen.getByRole("form"));
    expect(await screen.findByText(/Le mot de passe doit contenir au moins 6 caractères/i)).toBeInTheDocument();
  });

  // On vérifie que les messages d'erreurs s'affichent correctement si les champs sont invalides
  it("should display an error message when email format is invalid", async () => {
    fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
    fireEvent.submit(screen.getByRole("form"));
    expect(await screen.findByText(/L'email doit être valide/i)).toBeInTheDocument();
  });
  it("should display an error message when password is less than 6 characters", async () => {
    fireEvent.input(screen.getByLabelText(/Mot de passe/i), { target: { value: '12345' } });
    fireEvent.submit(screen.getByRole("form"));
    expect(await screen.findByText(/Le mot de passe doit contenir au moins 6 caractères/i)).toBeInTheDocument();
  });

  // On vérifie que la valeur des champs est mise à jour correctement
  it("should update the email field as the user types", () => {
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.input(emailInput, { target: { value: 'user@example.com' } });
    expect(emailInput.value).toBe('user@example.com');
  });
  it("should update the password field as the user types", () => {
    const passwordInput = screen.getByLabelText(/Mot de passe/i) as HTMLInputElement;
    fireEvent.input(passwordInput, { target: { value: 'password' } });
    expect(passwordInput.value).toBe('password');
  });  

  // On vérifie que le lien de redirection vers la page d'inscription existe et renvoie vers la bonne page
  it("should contains link redirecting to register Page", () => {
    const link = screen.getByRole("link", { name: /s'inscrire/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/register");
  });
  it("should navigate to the register page when the register link is clicked", () => {
    const registerLink = screen.getByRole("link", { name: /s'inscrire/i });
    fireEvent.click(registerLink);
    expect(window.location.pathname).toBe('/register');
  });
});
