import { Link } from "react-router-dom";
import HeaderUnauthentifiedUser from "../HeaderUnauthentifiedUser";

const PageRegister = () => {
  return (
    <div className="w-screen">
      <HeaderUnauthentifiedUser />
      <h1 className="text-2xl text-center">Inscription</h1>
      <form role="form" className="flex flex-col items-center mt-4 space-y-2">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" />
        <input
          type="submit"
          value={"S'inscrire'"}
          className="p-2 bg-blue-500 rounded-sm hover:cursor-pointer"
        />
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
