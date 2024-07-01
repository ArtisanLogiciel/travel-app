import { NavLink } from "react-router-dom";

const HeaderUnauthentifiedUser = () => {
  return (
    <header className="w-full space-x-3 mt-2 mb-4 ">
      <nav className="flex justify-around w-full">
        <NavLink to="/" className="inline-block">
          Accueil
        </NavLink>

        <div className="space-x-3">
          <NavLink to="/login" className="inline-block">
            Connexion
          </NavLink>
          <NavLink to="/register" className="inline-block">
            Inscription
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default HeaderUnauthentifiedUser;
