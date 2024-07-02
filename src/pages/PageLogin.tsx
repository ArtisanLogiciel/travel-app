import { Link } from "react-router-dom";
import HeaderUnauthentifiedUser from "../components/HeaderUnauthentifiedUser";

const PageLogin = () => {
  return (
    <div className="w-screen ">
      <HeaderUnauthentifiedUser />
      <h1 className="text-2xl text-center ">Connexion</h1>
      <form role="form" className="flex flex-col items-center mt-4 space-y-2 ">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" />
        <input
          type="submit"
          value={"Se connecter"}
          className="p-2 bg-blue-500 rounded-sm hover:cursor-pointer"
        />
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
