import { NavLink } from "react-router-dom";

const HeaderAuthentifiedUser = () => {
  return (
    <header className="w-full mt-4" data-testid="header-authentified">
      <nav className="flex justify-around w-full">
        <NavLink to="/" className="inline-block">
          Accueil
        </NavLink>
        <div className="space-x-3">
          <NavLink to="/my-account" className="inline-block">
            Mon compte
          </NavLink>
          <NavLink to="/" className="inline">
            Déconnexion
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default HeaderAuthentifiedUser;
