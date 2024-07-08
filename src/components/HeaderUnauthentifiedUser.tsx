import { NavLink } from "react-router-dom";

const HeaderUnauthentifiedUser = () => {
  return (
    <header className="w-full mt-2 mb-4 space-x-3" data-testid="header-unauthentified" >
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
