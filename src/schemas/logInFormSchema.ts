import { z, ZodType } from 'zod';
import { LogInFormType } from "@/types/Forms"

export const LogInFormSchema: ZodType<LogInFormType> = z.object({
  email: z.string().email({ message: "L'email doit être valide" }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères", }),
});