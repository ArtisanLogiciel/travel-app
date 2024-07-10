import { z, ZodType } from 'zod';
import { RegisterFormType } from "@/types/Forms"

export const RegisterFormSchema: ZodType<RegisterFormType> = z.object({
  email: z.string().email({ message: "L'email doit être valide" }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
  confirmPassword: z.string().min(1, { message: "La confirmation du mot de passe est obligatoire" }),
  displayName: z.string().min(3, { message: "Le nom doit comporter au moins 3 caractères" }),
  city: z.string(),
  //interests: z.array(z.string()),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe doivent correspondre",
  path: ["confirmPassword"],
});