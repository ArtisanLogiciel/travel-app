import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email({ message: "L'email doit être valide" }),
    password: z.string().min(6, { message: "Le mot de passe contient au moins 6 caractères.", }),
});

export const RegisterFormSchema = LoginFormSchema.extend({
    confirmPassword: z.string().min(1, { message: "La confirmation du mot de passe est obligatoire" }),
    displayName: z.string().min(3, { message: "Le nom doit comporter au moins 3 caractères" }),
    city: z.string(),
    interests: z.array(z.string()),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe doivent correspondre",
    path: ["confirmPassword"],
});