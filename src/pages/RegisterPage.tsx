import { Link } from "react-router-dom";
import HeaderUnauthentifiedUser from "../components/HeaderUnauthentifiedUser";

import { RegisterFormSchema } from "@/schemas/registerFormSchema"
import { RegisterFormType } from "@/types/Forms"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextField, Button, Stack } from "@mui/material"

const PageRegister = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "", displayName: "" }
  })

  const submitRegisterData = (data: RegisterFormType) => {
    console.log("xxx")
    console.log("submit register", data)
  }

  return (
    <div className="w-screen">
      <HeaderUnauthentifiedUser />
      <h1 className="text-2xl text-center">Inscription</h1>

      <form 
        role="form" 
        className="flex flex-col items-center mt-4 space-y-2 text-black"
        onSubmit={handleSubmit(submitRegisterData)}
      > 
        <Stack spacing={2} width={400}>
          <TextField
            label="Email"
            type="email"
            style={{ backgroundColor: 'white' }}
            {...register("email")}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          <TextField
            label="Mot de passe"
            type="password"
            style={{ backgroundColor: 'white' }}
            {...register("password")}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <TextField
            label="Confirmer le mot de passe"
            type="password"
            style={{ backgroundColor: 'white' }}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}

          <TextField
            label="Nom"
            style={{ backgroundColor: 'white' }}
            {...register("displayName")}
          />
          {errors.displayName && <span className="text-red-500">{errors.displayName.message}</span>}

          <TextField
            label="Ville"
            style={{ backgroundColor: 'white' }}
            {...register("city")}
          />
          {errors.city && <span className="text-red-500">{errors.city.message}</span>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            S'inscrire
          </Button>
        </Stack>
      </form>

      <div className="w-2/3 p-2 mx-auto mt-8 text-black bg-white rounded-sm">
        <h1>Vous avez déjà un compte ?</h1>
        <Link to="/login" className="underline">
          Se connecter
        </Link>
      </div>
    </div>
  );
};

export default PageRegister;