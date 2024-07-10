import { Link } from "react-router-dom";
import HeaderUnauthentifiedUser from "@/components/HeaderUnauthentifiedUser";

import { LogInFormSchema } from "@/schemas/logInFormSchema"
import { LogInFormType } from "@/types/Forms"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextField, Button, Stack } from "@mui/material"

const PageLogin = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LogInFormType>({
    resolver: zodResolver(LogInFormSchema),
    defaultValues: { email: "", password: "" }
  })

  const submitLoginData = (data: LogInFormType) => {
    console.log("submit login", data)
  }

  return (
    <div className="w-screen ">
      <HeaderUnauthentifiedUser />
      <h1 className="text-2xl text-center ">Connexion</h1>

      <form 
        role="form" 
        className="flex flex-col items-center mt-4 space-y-2 text-black"
        onSubmit={handleSubmit(submitLoginData)}
      > 
        <Stack spacing={2} width={400}>       
          <TextField 
            label="Email"
            type="email"
            style={{ backgroundColor: 'white' }}
            {...register("email")} 
          />
          { errors.email && <span className="text-red-500">{errors.email.message}</span> }
          
          <TextField 
            label="mot de passe"
            type="password" 
            style={{ backgroundColor: 'white' }}
            {...register("password")} 
          />
          { errors.password && <span className="text-red-500">{errors.password.message}</span> }
        
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Se connecter
          </Button>
        </Stack>
      </form>

      <div>
        <div className="w-2/3 p-2 mx-auto mt-8 text-black bg-white rounded-sm">
          <h1 className="font-bold">Vous n'avez pas de compte ?</h1>
          <Link to="/register" className="underline ">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;